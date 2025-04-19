import WatchContext from '../WatchContext'
import {NotFounds, Divide, Right, NotFoundImg} from './styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => (
  <WatchContext.Consumer>
    {value => {
      const {isLightTheme} = value
      return (
        <div>
          <Header />
          <Divide>
            <SideBar />
            <Right isLight={isLightTheme}>
              <NotFounds isLight={isLightTheme}>
                <NotFoundImg
                  src={
                    isLightTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  }
                  alt="not found"
                />
                <h1>Page Not Found</h1>
                <p>we are sorry, the page you requested could not be found.</p>
              </NotFounds>
            </Right>
          </Divide>
        </div>
      )
    }}
  </WatchContext.Consumer>
)

export default NotFound
