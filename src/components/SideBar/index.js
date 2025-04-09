import {Link} from 'react-router-dom'
import WatchContext from '../WatchContext'
import {
  SideBarContainer,
  UnOrdered,
  Footer,
  Logos,
  LogoImgs,
} from './styledComponents'

const SideBar = () => (
  <WatchContext.Consumer>
    {value => {
      const {isLightTheme} = value

      return (
        <SideBarContainer isLight={isLightTheme}>
          <UnOrdered>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/trending">
              <li>Trending</li>
            </Link>
            <Link to="/gaming">
              <li>Gaming</li>
            </Link>
            <Link to="/saved-videos">
              <li>Saved Videos</li>
            </Link>
          </UnOrdered>
          <Footer>
            <h1>CONTACT US</h1>
            <Logos>
              <LogoImgs
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt=" facebook logo"
              />
              <LogoImgs
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LogoImgs
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt=" linked in logo"
              />
            </Logos>
            <p>Enjoy! Now to see your channels & recommendations!</p>
          </Footer>
        </SideBarContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default SideBar
