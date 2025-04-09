import WatchContext from '../WatchContext'
import {
  HeadContainer,
  LogoutContainer,
  HeadLogo,
  Profile,
} from './styledComponents'
import Logout from '../Logout'

const Header = () => (
  <WatchContext.Consumer>
    {value => {
      const {isLightTheme} = value
      return (
        <HeadContainer>
          <HeadLogo
            src={
              isLightTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            }
            alt="website logo"
          />
          <LogoutContainer>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Logout />
          </LogoutContainer>
        </HeadContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default Header
