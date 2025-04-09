import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {LogOut, Confirm, Cancel} from './styledComponents'

const Logout = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <LogOut type="button" className="trigger-button">
            Logout
          </LogOut>
        }
      >
        {close => (
          <>
            <div>
              <p>Are you sure,you want to logout?</p>
            </div>
            <Cancel
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              cancel
            </Cancel>
            <Confirm
              type="button"
              className="trigger-button"
              onClick={() => onLogout()}
            >
              Confirm
            </Confirm>
          </>
        )}
      </Popup>
    </div>
  )
}
export default withRouter(Logout)
