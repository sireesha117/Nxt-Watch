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
  background-color: transparent;
`

export const DislikeButton = styled.button`
  color: ${props => {
    if (props.isDislike) {
      return '#4f46e5' // Blue color when disliked
    }
    return props.isLight ? 'black' : 'white' // Theme-based fallback
  }};
  border-width: 0px;
  background-color: transparent;
`

export const SaveButton = styled.button`
  color: ${props => {
    if (props.isSaved) {
      return '#4f46e5' // Blue color when saved
    }
    return props.isLight ? 'black' : 'white' // Theme-based fallback
  }};
  border-width: 0px;
  background-color: transparent;
`
