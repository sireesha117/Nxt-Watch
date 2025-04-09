import React from 'react'

const WatchContext = React.createContext({
  isLightTheme: true,
  onchangeTheme: () => {},
})
export default WatchContext
