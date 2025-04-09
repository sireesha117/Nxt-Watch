import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

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
          <button type="button" className="trigger-button">
            Logout
          </button>
        }
      >
        {close => (
          <>
            <div>
              <p>Are u sure?</p>
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              cancel
            </button>
            <button
              type="button"
              className="trigger-button"
              onClick={() => onLogout()}
            >
              Logout
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}
export default withRouter(Logout)
