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
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%; /* Sidebar width */
  padding: 10px;
  background-color: ${props => (props.isLight ? 'white' : ' #313131')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  height: 100vh; /* Sidebar spans full viewport height */
  position: sticky; /* Keeps the sidebar fixed when scrolling */
  top: 0; /* Ensures it sticks to the top */
`

export const UnOrdered = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: auto; /* Moves footer to the bottom */
  padding-top: 10px;
  border-top: 1px solid ${props => (props.isLight ? 'gray' : 'white')}; /* Optional styling */
`

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`

export const LogoImgs = styled.img`
  height: 30px;
  width: 30px;
`
