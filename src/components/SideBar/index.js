import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import WatchContext from '../WatchContext'

import {
  SideBarContainer,
  UnOrdered,
  Footer,
  HeadData,
  StyledLink,
  Logos,
  LogoImgs,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <SideBarContainer isLight={isLightTheme}>
              <UnOrdered>
                {/* Render Home Tab */}
                <StyledLink to="/" isLight={isLightTheme}>
                  <li>Home</li>
                </StyledLink>

                {/* Render Trending Tab */}
                <StyledLink to="/trending" isLight={isLightTheme}>
                  <li>Trending</li>
                </StyledLink>

                {/* Render Gaming Tab */}
                <StyledLink to="/gaming" isLight={isLightTheme}>
                  <li>Gaming</li>
                </StyledLink>

                {/* Render Saved Videos Tab */}
                <StyledLink to="/saved-videos" isLight={isLightTheme}>
                  <li>Saved Videos</li>
                </StyledLink>
              </UnOrdered>
              <Footer>
                <HeadData>CONTACT US</HeadData>
                <Logos>
                  <LogoImgs
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <LogoImgs
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <LogoImgs
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </Logos>
                <p>Enjoy! Now to see your channels & recommendations!</p>
              </Footer>
            </SideBarContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
