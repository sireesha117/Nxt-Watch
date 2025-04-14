import Header from '../Header'
import SideBar from '../SideBar'
import WatchContext from '../WatchContext'
import {
  Right,
  Divide,
  EmptyImage,
  EmptyDiv,
  UlSaved,
  LiSaved,
  SavedImg,
} from './styledComponents'

const SavedVideos = () => (
  <WatchContext.Consumer>
    {value => {
      const {isLightTheme, savedVideos} = value

      return (
        <div>
          <Header />
          <Divide>
            <SideBar />
            <Right isLight={isLightTheme}>
              {savedVideos.length === 0 ? (
                <EmptyDiv>
                  <EmptyImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                    alt="no saved videos"
                  />
                  <h1>No saved videos found</h1>
                  <p>You can save your videos while watching them</p>
                </EmptyDiv>
              ) : (
                <div>
                  <UlSaved>
                    {savedVideos.map(eachItem => (
                      <LiSaved key={eachItem.id}>
                        <SavedImg src={eachItem.thumbnailUrl} alt="Thumbnail" />
                        <div>
                          <h1>{eachItem.title}</h1>
                          <p>{eachItem.channel.name}</p>
                          <div>
                            <span>{eachItem.viewCount} views</span>
                            <span>{eachItem.publishedAt}</span>
                          </div>
                        </div>
                      </LiSaved>
                    ))}
                  </UlSaved>
                </div>
              )}
            </Right>
          </Divide>
        </div>
      )
    }}
  </WatchContext.Consumer>
)

export default SavedVideos
