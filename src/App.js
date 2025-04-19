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
  state = {isLightTheme: true, savedVideos: [], close: false}

  onChangeTheme = () => {
    this.setState(prevState => ({isLightTheme: !prevState.isLightTheme}))
  }

  onCloseIcon = () => {
    this.setState({close: true})
  }

  onSaved = savedResult => {
    this.setState(prevState => {
      const saveCheck = prevState.savedVideos.find(
        video => video.id === savedResult.id,
      )

      if (saveCheck) {
        const updatedVideos = prevState.savedVideos.filter(
          video => video.id !== savedResult.id,
        )
        console.log('Video removed from saved videos:', savedResult)
        return {savedVideos: updatedVideos}
      }
      console.log('Video added to saved videos:', savedResult)
      return {savedVideos: [...prevState.savedVideos, savedResult]}
    })
  }

  render() {
    const {isLightTheme, savedVideos, close} = this.state
    return (
      <WatchContext.Provider
        value={{
          isLightTheme,
          close,
          onChangeTheme: this.onChangeTheme,
          savedVideos,
          onSaved: this.onSaved,
          onCloseIcon: this.onCloseIcon,
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
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
