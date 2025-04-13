import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import WatchContext from '../WatchContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  Right,
  Divide,
  DislikeButton,
  LikeButton,
  SaveButton,
} from './styledComponents'

const apiSts = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class VideoItemDetails extends Component {
  state = {
    detailArray: [],
    apiStsData: apiSts.initial,
    isLike: false,
    isDislike: false,
  }

  componentDidMount() {
    this.getVideoData()
  }

  getFormattedDate = date => {
    const rawOutput = formatDistanceToNow(new Date(date), {addSuffix: true})

    return rawOutput.replace(/almost |about /g, '')
  }

  onLike = () => {
    this.setState(prevState => ({
      isLike: !prevState.isLike,
    }))
  }

  onDislike = () => {
    this.setState(prevState => ({
      isDislike: !prevState.isDislike,
    }))
  }

  getVideoData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStsData: apiSts.inProgress})
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: this.getFormattedDate(data.video_details.published_at),
        description: data.video_details.description,
      }

      this.setState({detailArray: formattedData, apiStsData: apiSts.success})
    } else {
      this.setState({apiStsData: apiSts.failure})
    }
  }

  renderVideoData = () => {
    const {apiStsData, detailArray, isLike, isDislike} = this.state

    switch (apiStsData) {
      case apiSts.inProgress:
        return <p>Loading...</p>

      case apiSts.success:
        return (
          <WatchContext.Consumer>
            {value => {
              const {isLightTheme, savedVideos, onSaved} = value
              const isSaved = savedVideos.some(
                video => video.id === detailArray.id,
              )

              const {
                title,
                videoUrl,
                viewCount,
                publishedAt,
                description,
              } = detailArray

              return (
                <div>
                  <div key={detailArray.id}>
                    <ReactPlayer url={videoUrl} />
                    <h1>{title}</h1>
                    <div>
                      <span>{viewCount} views</span>
                      <span>{publishedAt}</span>
                      <div>
                        <LikeButton
                          isLike={isLike}
                          isLight={isLightTheme}
                          type="button"
                          onClick={this.onLike}
                        >
                          <p>Like</p>
                        </LikeButton>
                        <DislikeButton
                          isDislike={isDislike}
                          isLight={isLightTheme}
                          type="button"
                          onClick={this.onDislike}
                        >
                          <p>Dislike</p>
                        </DislikeButton>
                        <SaveButton
                          isLight={isLightTheme}
                          isSaved={isSaved}
                          type="button"
                          onClick={() => onSaved(detailArray)}
                        >
                          <p>{isSaved ? 'Saved' : 'Save'}</p>
                        </SaveButton>
                      </div>
                    </div>
                    <p>{description}</p>
                  </div>
                </div>
              )
            }}
          </WatchContext.Consumer>
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

          return (
            <div>
              <Header />
              <Divide>
                <SideBar />
                <Right isLight={isLightTheme}>
                  <div>{this.renderVideoData()}</div>
                </Right>
              </Divide>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default VideoItemDetails
