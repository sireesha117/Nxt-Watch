import {Link} from 'react-router-dom'
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
            <Right isLight={isLightTheme} data-testid="savedVideos">
              {savedVideos.length === 0 ? (
                <EmptyDiv>
                  <EmptyImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                    alt="no saved videos"
                  />
                  <h1>No saved videos found</h1>
                  <p>Save your videos by clicking a button</p>
                </EmptyDiv>
              ) : (
                <div>
                  <h1>Saved Videos</h1>
                  <UlSaved>
                    {savedVideos.map(eachItem => (
                      <Link to={`/videos/${eachItem.id}`}>
                        <LiSaved key={eachItem.id}>
                          <SavedImg
                            src={eachItem.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <div>
                            <p>{eachItem.title}</p>
                            <p>{eachItem.channel.name}</p>
                            <div>
                              <p>{eachItem.viewCount} views</p>
                              <p>{eachItem.publishedAt}</p>
                            </div>
                          </div>
                        </LiSaved>
                      </Link>
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
