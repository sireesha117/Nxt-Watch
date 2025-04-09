import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoIosClose} from 'react-icons/io'
import {CiSearch} from 'react-icons/ci'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  Divide,
  Banner,
  CloseIcon,
  BannerImg,
  Right,
  HomeData,
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
    this.setState({userInput: event.target.value})
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
        return <p>Loading...</p> // Show a loading indicator

      case apiSts.success:
        return (
          <ul>
            {homeData.map(video => (
              <li key={video.id}>
                <img src={video.thumbnailUrl} alt={video.title} />
                <h4>{video.title}</h4>
                <p>{video.channel.name}</p>
              </li>
            ))}
          </ul>
        ) // Render the data when API call is successful

      case apiSts.failure:
        return <p>Something went wrong. Please try again.</p> // Show error message for failure case

      default:
        return null // Handle the initial state or unexpected cases
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
                  <div>
                    <input
                      type="search"
                      value={userInput}
                      onChange={this.onUserInput}
                    />
                    <button type="button">
                      <CiSearch />
                    </button>
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

export default Home
