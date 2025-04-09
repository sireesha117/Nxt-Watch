import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import WatchContext from './components/WatchContext'

// Replace your code here
class App extends Component {
  state = {isLightTheme: true}

  onChangeTheme = () => {
    this.setState(prevState => ({isLightTheme: prevState.isLightTheme}))
  }

  render() {
    const {isLightTheme} = this.state
    return (
      <WatchContext.Provider
        value={{
          isLightTheme,
          onChangeTheme: this.onChangeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/VideoItemDetails"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
