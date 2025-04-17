import styled from 'styled-components'

export const Divide = styled.div`
  display: flex;
  flex-direction: row;
`
export const Right = styled.div`
  padding: 10px;
  background-color: ${props => (props.isLight ? ' #ebebeb' : 'black')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  width: 100%;
`
export const LikeButton = styled.button`
  color: ${props => {
    if (props.isLike) {
      return '#4f46e5' // Blue color when liked
    }
    return props.isLight ? 'black' : 'white' // Theme-based fallback
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
export const Channel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const DislikeButton = styled.button`
  color: ${props => {
    if (props.isDislike) {
      return '#4f46e5' // Blue color when disliked
    }
    return props.isLight ? 'black' : 'white' // Theme-based fallback
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
      return '#4f46e5' // Blue color when saved
    }
    return props.isLight ? 'black' : 'white' // Theme-based fallback
  }};
  border-width: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`
