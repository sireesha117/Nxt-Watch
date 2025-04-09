import {Component} from 'react'
import {IoIosClose} from 'react-icons/io'
import Header from '../Header'
import SideBar from '../SideBar'
import {Divide, Banner, CloseIcon, BannerImg, Right} from './styledComponents'
import WatchContext from '../WatchContext'

// const apiSts = {
//   initial: 'INITIAL',
//   inProgress: 'INPROGRESS',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
// }
class Home extends Component {
  // state = {userInput: '', apiStsData: apiSts.initial}
  state = {close: false}

  onCloseIcon = () => {
    this.setState({close: true})
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const {close} = this.state
          return (
            <div>
              <Header />
              <Divide>
                <SideBar />
                <Right isLight={isLightTheme}>
                  {!close && (
                    <Banner isLight={isLightTheme}>
                      <div>
                        <BannerImg
                          src={
                            isLightTheme
                              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                          }
                          alt="logo"
                        />
                        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                        <button type="button">Get it now</button>
                      </div>
                      <CloseIcon onClick={this.onCloseIcon}>
                        <IoIosClose />
                      </CloseIcon>
                    </Banner>
                  )}
                </Right>
              </Divide>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home
