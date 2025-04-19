import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'
import {BsDot} from 'react-icons/bs'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import WatchContext from '../WatchContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  Right,
  Divide,
  VideoHead,
  Channelimg,
  Views,
  ViewLike,
  Space,
  VideoItem,
  LikeIcons,
  DislikeButton,
  LikeButton,
  Channel,
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
      isDislike: false, // Deselect Dislike if Like is selected
    }))
  }

  onDislike = () => {
    this.setState(prevState => ({
      isDislike: !prevState.isDislike,
      isLike: false, // Deselect Like if Dislike is selected
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
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        )

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
                <VideoItem>
                  <div key={detailArray.id}>
                    <ReactPlayer url={videoUrl} width="100%" />
                    <VideoHead>{title}</VideoHead>
                    <ViewLike>
                      <Views>
                        <p>{viewCount} </p>
                        <BsDot />
                        <p>{publishedAt}</p>
                      </Views>
                      <LikeIcons>
                        <LikeButton
                          isLike={isLike}
                          isLight={isLightTheme}
                          type="button"
                          onClick={this.onLike}
                        >
                          <BiLike />
                          Like
                        </LikeButton>
                        <DislikeButton
                          isDislike={isDislike}
                          isLight={isLightTheme}
                          type="button"
                          onClick={this.onDislike}
                        >
                          <BiDislike />
                          Dislike
                        </DislikeButton>
                        <SaveButton
                          isLight={isLightTheme}
                          isSaved={isSaved}
                          type="button"
                          onClick={() => onSaved(detailArray)}
                        >
                          <RiPlayListAddLine />
                          {isSaved ? 'Saved' : 'Save'}
                        </SaveButton>
                      </LikeIcons>
                    </ViewLike>
                    <hr />
                    <Channel>
                      <Channelimg
                        src={detailArray.channel.profileImageUrl}
                        alt={detailArray.channel.name}
                      />
                      <div>
                        <Space>{detailArray.channel.name}</Space>
                        <Space>
                          {detailArray.channel.subscriberCount} subscriber
                        </Space>
                        <p>{description}</p>
                      </div>
                    </Channel>
                  </div>
                </VideoItem>
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
                <Right isLight={isLightTheme} data-testid="videoItemDetails">
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
