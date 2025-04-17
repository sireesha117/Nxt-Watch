import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => {
    if (props.isActive && props.isLight) {
      return 'black' // Active tab text color for light theme
    }
    if (props.isActive && !props.isLight) {
      return 'white' // Active tab text color for dark theme
    }
    return 'inherit' // Default text color for non-active tabs
  }};
  background-color: ${props => {
    if (props.isActive && props.isLight) {
      return '#d7dfe9' // Active tab background color for light theme
    }
    if (props.isActive && !props.isLight) {
      return '#909090' // Active tab background color for dark theme
    }
    return 'transparent' // Default background color for non-active tabs
  }};
  padding: 10px;
  border-radius: 5px; /* Add rounded corners */
  display: block; /* Allow link to span the full width of the sidebar */
  &:hover {
    text-decoration: none; /* No underline on hover */
    opacity: 0.8; /* Optional hover effect */
  }
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const List = styled.li`
  padding-left: 10px;
`
export const HeadData = styled.h1`
  font-size: 15px;
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
