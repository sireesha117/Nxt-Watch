import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  PopupContainer,
  PopupMessage,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  LogOut,
} from './styledComponents'
import WatchContext from '../WatchContext'

const Logout = props => (
  <WatchContext.Consumer>
    {value => {
      const {isLightTheme} = value

      const onLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <div>
          <Popup
            modal
            trigger={
              <LogOut
                type="button"
                style={{
                  backgroundColor: 'transparent',
                  color: isLightTheme ? '#3b82f6' : 'white',
                  borderColor: isLightTheme ? '#3b82f6' : 'white',
                }}
              >
                Logout
              </LogOut>
            }
          >
            {close => (
              <PopupContainer isLight={isLightTheme}>
                <PopupMessage>Are you sure you want to logout?</PopupMessage>
                <ButtonContainer>
                  <CancelButton onClick={close}>Cancel</CancelButton>
                  <ConfirmButton onClick={onLogout}>Confirm</ConfirmButton>
                </ButtonContainer>
              </PopupContainer>
            )}
          </Popup>
        </div>
      )
    }}
  </WatchContext.Consumer>
)

export default withRouter(Logout)
