import WatchContext from '../WatchContext'
import {HeadContainer} from './styledComponents'
import Logout from '../Logout'

const Header = () => (
  <WatchContext.Consumer>
    {value => {
      const {isLightTheme} = value
      return (
        <HeadContainer>
          <img
            src={
              isLightTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            }
            alt="website logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Logout />
          </div>
        </HeadContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default Header
