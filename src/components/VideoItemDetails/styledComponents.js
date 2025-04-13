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
  color: ${props => (props.isLike ? '#4f46e5' : '')};
  border-width: 0px;
  background-color: transparent;
`
export const DislikeButton = styled.button`
  color: ${props => (props.isDislike ? '#4f46e5' : '')};
  border-width: 0px;
  background-color: transparent;
`
export const SaveButton = styled.button`
  color: ${props => (props.isSaved ? '#4f46e5' : '')};
  border-width: 0px;
  background-color: transparent;
`
