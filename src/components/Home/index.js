import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoIosClose} from 'react-icons/io'
import {CiSearch} from 'react-icons/ci'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  Divide,
  GetIt,
  Banner,
  Views,
  ProfileDiv,
  Profile,
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

  onRetry = () => {
    this.getHomeData()
  }

  onCloseIcon = () => {
    this.setState({close: true})
  }

  onUserInput = event => {
    this.setState({userInput: event.target.value})
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
        if (homeData.length === 0) {
          // Handle the case when videos list is empty
          return (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png " // Update with the correct URL for "No Videos view image"
                alt="no videos"
              />
              <h1>No Search results found</h1>
              <p>Try different key words or remove search filter</p>
              <button type="button" onClick={this.onRetry}>
                Retry
              </button>
            </div>
          )
        }
        return (
          <HomeSuccess>
            {homeData.map(video => (
              <StyledLink to={`/videos/${video.id}`}>
                <HomeList key={video.id}>
                  <HomeImg src={video.thumbnailUrl} alt="video thumbnail" />
                  <ProfileDiv>
                    <Profile
                      src={video.channel.profileImageUrl}
                      alt="channel logo"
                    />
                    <HeadingHome>{video.title}</HeadingHome>
                  </ProfileDiv>

                  <Ib>{video.channel.name}</Ib>

                  <Views>
                    <p>{video.viewCount} views</p>
                    <BsDot />
                    <p>{video.publishedAt}</p>
                  </Views>
                </HomeList>
              </StyledLink>
            ))}
          </HomeSuccess>
        )

      case apiSts.failure:
        return (
          <WatchContext.Consumer>
            {value => {
              const {isLightTheme} = value
              return (
                <div>
                  <img
                    src={
                      isLightTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    }
                    alt="failure view"
                  />
                  <h1>Oops! Something Went Wrong</h1>
                  <p>We are having some trouble</p>
                  <button type="button" onClick={this.onRetry}>
                    Retry
                  </button>
                </div>
              )
            }}
          </WatchContext.Consumer>
        )

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
                <Right isLight={isLightTheme} data-testid="home">
                  <div>
                    {!close && (
                      <Banner isLight={isLightTheme} data-testid="banner">
                        <div>
                          <BannerImg
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                          <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                          <GetIt type="button">GET IT NOW</GetIt>
                        </div>
                        <CloseIcon
                          data-testid="close"
                          onClick={this.onCloseIcon}
                        >
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
                    <SearchButton
                      data-testid="searchButton"
                      type="button"
                      onClick={this.getHomeData}
                    >
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
