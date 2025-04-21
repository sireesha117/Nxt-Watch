import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsDot, BsFire} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  Divide,
  Ib,
  Trendings,
  Loaders,
  Trend,
  Views,
  StyledLink,
  HomeImg,
  HeadingHome,
  Right,
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
class Trending extends Component {
  state = {
    apiStsData: apiSts.initial,
    homeData: [],
  }

  componentDidMount() {
    this.getHomeData()
  }

  getFormattedDate = date => {
    const rawOutput = formatDistanceToNow(new Date(date), {addSuffix: true})

    const cleanedOutput = rawOutput.replace(
      /\bover\b|\balmost\b|\babout\b/g,
      '',
    )
    return cleanedOutput.trim()
  }

  getHomeData = async () => {
    this.setState({apiStsData: apiSts.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
        viewCount: eachItem.view_count,
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
          <Trendings>
            <Trend>
              <BsFire size={30} color="#ff0000" />

              <h1>Trending</h1>
            </Trend>
            <HomeSuccess>
              {homeData.map(video => (
                <StyledLink to={`/videos/${video.id}`}>
                  <HomeList key={video.id}>
                    <HomeImg src={video.thumbnailUrl} alt="video thumbnail" />
                    <div>
                      <HeadingHome>{video.title}</HeadingHome>
                      <Ib>{video.channel.name}</Ib>

                      <Views>
                        <p>{video.viewCount} views</p>
                        <BsDot />
                        <p>{video.publishedAt}</p>
                      </Views>
                    </div>
                  </HomeList>
                </StyledLink>
              ))}
            </HomeSuccess>
          </Trendings>
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
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <div>
              <Header />
              <Divide>
                <SideBar />
                <Right isLight={isLightTheme} data-testid="trending">
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

export default Trending
