import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoIosClose} from 'react-icons/io'
import {CiSearch} from 'react-icons/ci'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  Divide,
  Banner,
  InfoRow,
  InputDiv,
  SearchButton,
  Ib,
  StyledLink,
  CloseIcon,
  HomeImg,
  HeadingHome,
  BannerImg,
  Right,
  HomeData,
  HomeSuccess,
  HomeList,
  Loaders,
} from './styledComponents'
import WatchContext from '../WatchContext'

const apiSts = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Home extends Component {
  state = {
    close: false,
    userInput: '',
    apiStsData: apiSts.initial,
    homeData: [],
  }

  componentDidMount() {
    this.getHomeData()
  }

  onCloseIcon = () => {
    this.setState({close: true})
  }

  onUserInput = event => {
    this.setState({userInput: event.target.value}, this.getHomeData)
  }

  getFormattedDate = date => {
    const rawOutput = formatDistanceToNow(new Date(date), {addSuffix: true})

    return rawOutput.replace(/almost |about /g, '')
  }

  getHomeData = async () => {
    const {userInput} = this.state
    this.setState({apiStsData: apiSts.inProgress})
    const url = `https://apis.ccbp.in/videos/all?search=${userInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        viewCount:
          eachItem.view_count > 1000
            ? `${(eachItem.view_count / 1000).toFixed(1)}k`
            : eachItem.view_count,
        publishedAt: this.getFormattedDate(eachItem.published_at),
      }))

      this.setState({homeData: formattedData, apiStsData: apiSts.success})
    } else {
      this.setState({apiStsData: apiSts.failure})
    }
  }

  renderHomeData = () => {
    const {apiStsData, homeData} = this.state

    switch (apiStsData) {
      case apiSts.inProgress:
        return (
          <Loaders className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </Loaders>
        )

      case apiSts.success:
        return (
          <HomeSuccess>
            {homeData.map(video => (
              <StyledLink to={`/videos/${video.id}`}>
                <HomeList key={video.id}>
                  <HomeImg src={video.thumbnailUrl} alt={video.title} />
                  <HeadingHome>{video.title}</HeadingHome>
                  <Ib>{video.channel.name}</Ib>
                  <InfoRow>
                    <span>{video.viewCount} views</span>
                    <span>{video.publishedAt}</span>
                  </InfoRow>
                </HomeList>
              </StyledLink>
            ))}
          </HomeSuccess>
        )

      case apiSts.failure:
        return <p>Something went wrong. Please try again.</p>

      default:
        return null
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const {close, userInput} = this.state
          return (
            <div>
              <Header />
              <Divide>
                <SideBar />
                <Right isLight={isLightTheme}>
                  <div>
                    {!close && (
                      <Banner isLight={isLightTheme}>
                        <div>
                          <BannerImg
                            src={
                              isLightTheme
                                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                            }
                            alt="logo"
                          />
                          <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                          <button type="button">Get it now</button>
                        </div>
                        <CloseIcon onClick={this.onCloseIcon}>
                          <IoIosClose />
                        </CloseIcon>
                      </Banner>
                    )}
                  </div>
                  <InputDiv>
                    <input
                      type="search"
                      value={userInput}
                      onChange={this.onUserInput}
                    />
                    <SearchButton type="button" onClick={this.getHomeData}>
                      <CiSearch />
                    </SearchButton>
                  </InputDiv>
                  <HomeData>{this.renderHomeData()}</HomeData>
                </Right>
              </Divide>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home
