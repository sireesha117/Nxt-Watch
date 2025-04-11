import React from 'react'

const WatchContext = React.createContext({
  isLightTheme: true,
  savedVideos: [],
  onSaved: () => {},
  onchangeTheme: () => {},
})
export default WatchContext
