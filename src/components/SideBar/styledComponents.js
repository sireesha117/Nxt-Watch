import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;

  color: ${props => {
    if (props.isActive) {
      return props.isLight ? '#ff0000' : '#ff0000'
    }
    return props.isLight ? 'black' : 'white'
  }};

  background-color: ${props => {
    if (props.isActive) {
      return props.isLight ? '#cbd5e1' : '#606060'
    }
    return 'transparent'
  }};

  &:hover {
    background-color: ${props => (props.isLight ? '#f1f1f1' : '#383838')};
    opacity: 0.8; /* Optional hover effect */
  }

  padding: 10px;
  border-radius: 5px; /* Rounded corners */
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const List = styled.li`
  padding-left: 10px;
  color: ${props =>
    props.isLight ? 'black' : 'white'}; /* Corrected ternary syntax */
`

export const HeadData = styled.p`
  font-size: 15px;
`
export const SideBarContainer = styled.div`
  display: flex;
  font-family: Roboto;
  flex-direction: column;
  justify-content: space-between;
  width: 15%; /* Sidebar width */
  padding: 10px;
  background-color: ${props => (props.isLight ? 'white' : ' #313131')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  // height: 100vh; /* Sidebar spans full viewport height */

  left: 0;
  height: calc(100vh - 70px); /* Adjust based on header height */
  position: fixed; /* Sidebar stays fixed and does not scroll */
  top: 70px;
`

export const UnOrdered = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
export const SidePara = styled.p`
  font-size: 13px;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: auto; /* Moves footer to the bottom */
  padding-top: 10px;
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
