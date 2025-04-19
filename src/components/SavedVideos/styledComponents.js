import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Ensure it inherits the parent element's color */
  &:visited {
    color: inherit; /* Prevent the visited link color from turning purple */
  }
  &:hover {
    text-decoration: none; /* Ensure no underline on hover */
  }
  &:active {
    color: inherit; /* Ensure active state does not change the color */
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Divide = styled.div`
  display: flex;
  flex-direction: row;
`
export const Right = styled.div`
  padding: 10px;
  background-color: ${props => (props.isLight ? ' #f9f9f9' : '#181818')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  font-family: Roboto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: calc(100% - 15%); /* Subtract sidebar's width from the total width */
  margin-left: 15%; /* Same as the sidebar's width */
  min-height: calc(100vh - 70px); /* Adjust for header height */

  overflow-y: auto; /* Allow vertical scrolling if content overflows */
  position: relative;
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
  align-items: flex-start;
`
export const SavedImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 5px;
  margin: 10px;
`
