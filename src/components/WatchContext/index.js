import React from 'react'

const WatchContext = React.createContext({
  isLightTheme: true,
  savedVideos: [],
  close: false,
  onSaved: () => {},
  onchangeTheme: () => {},
})
export default WatchContext
