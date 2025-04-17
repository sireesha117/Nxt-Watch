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
  align-items: flex-start;
`
export const EmptyImage = styled.img`
  height: 350px;
  width: 350px;
`
export const UlSaved = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
`
export const EmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
`
export const LiSaved = styled.li`
  display: flex;
  flex-direction: row;
  margin-left: 0px;
  align-items: center;
`
export const SavedImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 5px;
  margin: 10px;
`
