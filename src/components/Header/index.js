import {Link} from 'react-router-dom'

import {MdOutlineDarkMode as MdDarkMode} from 'react-icons/md'
import {CiLight} from 'react-icons/ci'
import WatchContext from '../WatchContext'

import {
  HeadContainer,
  LogoutContainer,
  ThemeButton,
  HeadLogo,
  Profile,
} from './styledComponents'
import Logout from '../Logout'

const Header = () => (
  <WatchContext.Consumer>
    {value => {
      const {isLightTheme, onChangeTheme} = value
      const onClickThemeBtn = () => {
        onChangeTheme()
      }
      return (
        <HeadContainer isLight={isLightTheme}>
          <Link to="/">
            <HeadLogo
              src={
                isLightTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
            />
          </Link>

          <LogoutContainer>
            <div>
              {isLightTheme ? (
                <ThemeButton
                  isLight={isLightTheme}
                  type="button"
                  onClick={onClickThemeBtn}
                >
                  <MdDarkMode />
                </ThemeButton>
              ) : (
                <ThemeButton isLight={isLightTheme} onClick={onClickThemeBtn}>
                  <CiLight />
                </ThemeButton>
              )}
            </div>
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
