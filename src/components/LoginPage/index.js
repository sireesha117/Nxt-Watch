import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {LoginContainer, LoginCard, LogoImg} from './styledComponents'

class LoginPage extends Component {
  state = {username: '', password: '', errMsg: '', err: false, show: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({err: true, errMsg: errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {err, errMsg, username, password, show} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginCard>
          <LogoImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
          />
          <form onSubmit={this.onSubmitForm}>
            <div>
              <label htmlFor="username">USERNAME</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div>
              <label htmlFor="password">PASSWORD</label>
              <input
                onChange={this.onChangePassword}
                type={show ? 'text' : 'password'}
                value={password}
                id="password"
              />
            </div>
            <div>
              <input
                id="show"
                type="checkbox"
                onChange={this.onChangeCheckbox}
              />
              <label htmlFor="show">Show Password</label>
            </div>
            <button type="submit">Login</button>
            <div>{err && <p>{errMsg}</p>}</div>
          </form>
        </LoginCard>
      </LoginContainer>
    )
  }
}
export default LoginPage
