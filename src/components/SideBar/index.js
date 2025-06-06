import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddLine} from 'react-icons/ri'
import {BsFire} from 'react-icons/bs'

import WatchContext from '../WatchContext'

import {
  SideBarContainer,
  UnOrdered,
  Footer,
  List,
  HeadData,
  SidePara,
  StyledLink,
  Logos,
  LogoImgs,
} from './styledComponents'

class SideBar extends Component {
  render() {
    const {location} = this.props
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <SideBarContainer isLight={isLightTheme}>
              <UnOrdered>
                <StyledLink
                  to="/"
                  isLight={isLightTheme}
                  isActive={location.pathname === '/'}
                >
                  <IoMdHome />
                  <List isLight={isLightTheme}>Home</List>
                </StyledLink>

                <StyledLink
                  to="/trending"
                  isLight={isLightTheme}
                  isActive={location.pathname === '/trending'}
                >
                  <BsFire />
                  <List isLight={isLightTheme}>Trending</List>
                </StyledLink>

                <StyledLink
                  to="/gaming"
                  isLight={isLightTheme}
                  isActive={location.pathname === '/gaming'}
                >
                  <SiYoutubegaming />
                  <List isLight={isLightTheme}>Gaming</List>
                </StyledLink>

                <StyledLink
                  to="/saved-videos"
                  isLight={isLightTheme}
                  isActive={location.pathname === '/saved-videos'}
                >
                  <RiPlayListAddLine />
                  <List isLight={isLightTheme}>Saved videos</List>
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
                </Logos>
                <SidePara>
                  Enjoy! Now to see your channels and recommendations!
                </SidePara>
              </Footer>
            </SideBarContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
