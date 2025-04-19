import styled from 'styled-components'

export const Divide = styled.div`
  display: flex;
  flex-direction: row;
`
export const Right = styled.div`
  padding: 10px;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#181818')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  width: calc(100% - 15%); /* Subtract sidebar's width from the total width */
  margin-left: 15%; /* Same as the sidebar's width */
  min-height: calc(100vh - 70px); /* Adjust for header height */
  font-family: Roboto;
  overflow-y: auto; /* Allow vertical scrolling if content overflows */
  position: relative;
`

export const LikeButton = styled.button`
  color: ${props => {
    if (props.isLike) {
      return '#2563eb' // Blue color when liked
    }
    return props.isLight ? '#64748b' : 'white' // Theme-based fallback
  }};
  border-width: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`

export const LikeIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`
export const Channelimg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const Space = styled.p`
  margin: 0px;
  padding: 0px;
`
export const VideoHead = styled.p`
  font-size: 20px;
`
export const Channel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const DislikeButton = styled.button`
  color: ${props => {
    if (props.isDislike) {
      return '#2563eb' // Blue color when disliked
    }
    return props.isLight ? '#64748b' : 'white' // Theme-based fallback
  }};
  border-width: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`
export const Views = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`
export const VideoItem = styled.div`
  padding: 20px;
`
export const ViewLike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SaveButton = styled.button`
  color: ${props => {
    if (props.isSaved) {
      return '#2563eb' // Blue color when saved
    }
    return props.isLight ? '#64748b' : 'white' // Theme-based fallback
  }};
  border-width: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`
