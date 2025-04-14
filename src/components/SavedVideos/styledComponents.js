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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const EmptyImage = styled.img`
  height: 350px;
  width: 350px;
`
export const EmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
