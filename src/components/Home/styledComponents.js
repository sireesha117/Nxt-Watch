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
export const Loaders = styled.div`
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Perfect centering */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  aligh-items: center;
  width: auto;
  height: 100%;
`

export const Divide = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover; /* Use 'cover' to ensure the image spans the entire container */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  background-position: center; /* Center the background image */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start; /* Center vertically */
  width: 100%; /* Take the full width of the container */
  height: 200px; /* Specify the height of the banner */
  position: relative; /* Use relative positioning for the Banner */
  color: ${props => (props.isLight ? 'black' : 'black')};
  padding: 10px;
`

export const Profile = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 10px;
`

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const InputDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SearchButton = styled.button`
  // border-width: 0px;
  // background-color: transparent;
`

export const Right = styled.div`
  padding: 10px;
  background-color: ${props => (props.isLight ? ' #f9f9f9' : 'black')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  width: 100%;
  min-height: 100vh;
`

export const CloseIcon = styled.button`
display:props => props.closeBtn === true ? "none" : "flex";

background-color:transparent;
border-width:0px;
`
export const BannerImg = styled.img`
  width: 90px;
  height: 40px;
`
export const HomeData = styled.div`
  font-family: Roboto;
`
export const HomeSuccess = styled.ul`
  display: flex;
  flex-direction: row; /* Lay cards horizontally */
  flex-wrap: wrap; /* Wrap cards to the next row if space runs out */
  justify-content: flex-start; /* Spread cards evenly */
  list-style-type: none; /* Remove bullets */
  padding-left: 0px; /* Remove padding */
  margin: 0px; /* Remove margin */
  width: 100%;
`

export const Views = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`
export const Ib = styled.p`
  margin-left: 0px;
`

export const HomeList = styled.li`
  width: 220px; /* Set a fixed width for uniform cards */
  margin: 10px; /* Space between cards */
  display: flex;
  flex-direction: column; /* Stack content vertically */

  word-wrap: break-word; /* Prevent long words from overflowing */
  overflow: hidden; /* Hide overflowing text */
`

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row; /* Align items horizontally */
  justify-content: space-between; /* Space between the elements */
  width: 100%; /* Ensure it spans the full width of the card */
  margin-top: 5px; /* Space from the title or other elements */
  font-size: 12px; /* Adjust font size for readability */
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow: hidden; /* Prevent text overflow */
  text-overflow: ellipsis; /* Add ellipsis for overflowing text */
`

export const HomeImg = styled.img`
  height: 100px;
  width: 200px;
`
export const HeadingHome = styled.p`
  font-size: 16px; /* Make the font size small but readable */

  word-wrap: break-word; /* Ensure long titles break into multiple lines */
  max-width: 200px; /* Restrict the width to fit the card layout */
  text-align: left; /* Align text appropriately */
`
