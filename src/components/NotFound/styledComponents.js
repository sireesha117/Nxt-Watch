import styled from 'styled-components'

export const NotFounds = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const Divide = styled.div`
  display: flex;
  flex-direction: row;
`
export const Right = styled.div`
  padding: 10px;
  background-color: ${props => (props.isLight ? ' #f9f9f9' : '#181818')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImg = styled.img`
  height: 300px;
  width: 300px;
`
