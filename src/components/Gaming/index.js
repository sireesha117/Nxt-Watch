import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoIosClose} from 'react-icons/io'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  Divide,
  InfoRow,
  GetIt,
  CloseIcon,
  BannerImg,
  HomeImg,
  Banner,
  Game,
  Loaders,
  GameFire,
  HeadingHome,
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
        return (
          <Loaders className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </Loaders>
        )

      case apiSts.success:
        return (
          <Game>
            <GameFire>
              <SiYoutubegaming size={30} color="#ff0000" />
              <h1>Gamming</h1>
            </GameFire>

            <HomeSuccess>
              {homeData.map(video => (
                <StyledLink to={`/videos/${video.id}`}>
                  <HomeList key={video.id}>
                    <HomeImg src={video.thumbnailUrl} alt="video thumbnail" />
                    <HeadingHome>{video.title}</HeadingHome>

                    <InfoRow>
                      <p>{video.viewCount} watching worldwide</p>
                    </InfoRow>
                  </HomeList>
                </StyledLink>
              ))}
            </HomeSuccess>
          </Game>
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
    const {close} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <div>
              <Header />
              <Divide>
                <SideBar />
                <Right isLight={isLightTheme} data-testid="gaming">
                  <div>
                    {!close && (
                      <Banner isLight={isLightTheme}>
                        <div>
                          <BannerImg
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="logo"
                          />
                          <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                          <GetIt type="button">Get it now</GetIt>
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
