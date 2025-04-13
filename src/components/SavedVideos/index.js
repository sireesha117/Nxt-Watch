import Header from '../Header'
import SideBar from '../SideBar'
import WatchContext from '../WatchContext'
import {Right, Divide} from './styledComponents'

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
              <div>
                <ul>
                  {savedVideos.map(eachItem => (
                    <li>
                      <img src={eachItem.thumbnailUrl} alt="img" />
                      <div>
                        <h1>{eachItem.title}</h1>
                        <p>{eachItem.channel.name}</p>
                        <div>
                          <span>{eachItem.viewCount} views</span>
                          <span>{eachItem.publishedAt}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Right>
          </Divide>
        </div>
      )
    }}
  </WatchContext.Consumer>
)
export default SavedVideos
