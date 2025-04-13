import {Component} from 'react'
import Cookies from 'js-cookie'

import {IoIosClose} from 'react-icons/io'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  Divide,
  Banner,
  InfoRow,
  CloseIcon,
  HomeImg,
  HeadingHome,
  BannerImg,
  Right,
  StyledLink,
  HomeData,
  HomeSuccess,
  HomeList,
} from './styledComponents'
import WatchContext from '../WatchContext'

const apiSts = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Gaming extends Component {
  state = {
    close: false,

    apiStsData: apiSts.initial,
    homeData: [],
  }

  componentDidMount() {
    this.getHomeData()
  }

  onCloseIcon = () => {
    this.setState({close: true})
  }

  getHomeData = async () => {
    this.setState({apiStsData: apiSts.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
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
        viewCount: eachItem.view_count,
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
        return <p>loading</p>

      case apiSts.success:
        return (
          <HomeSuccess>
            {homeData.map(video => (
              <StyledLink to={`/videos/${video.id}`}>
                <HomeList key={video.id}>
                  <HomeImg src={video.thumbnailUrl} alt={video.title} />
                  <HeadingHome>{video.title}</HeadingHome>

                  <InfoRow>
                    <span>{video.viewCount} views</span>
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
          const {close} = this.state
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

export default Gaming
