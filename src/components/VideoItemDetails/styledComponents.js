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
