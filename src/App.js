import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'

// Replace your code here
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
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
    )
  }
}

export default App
