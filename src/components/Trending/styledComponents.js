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

export const Divide = styled.div`
  display: flex;
  flex-direction: row;
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
  color: ${props => (props.isLight ? 'black' : 'white')};
  padding: 10px;
`
export const Right = styled.div`
  padding: 10px;
  background-color: ${props => (props.isLight ? ' #ebebeb' : 'black')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  width: 100%;
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
  flex-direction: column; /* Lay cards horizontally */
  flex-wrap: wrap; /* Wrap cards to the next row if space runs out */
  justify-content: flex-start; /* Spread cards evenly */
  list-style-type: none; /* Remove bullets */
  padding-left: 0px; /* Remove padding */
  margin: 0px; /* Remove margin */
`
export const Ib = styled.p`
  margin-left: 0px;
`

export const HomeList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
  marging-left: 0px;
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
  height: 200px;
  width: 300px;
  border-radius: 5px;
  margin-right: 20px;
`
export const HeadingHome = styled.h1`
  font-size: 16px; /* Make the font size small but readable */
`
export const Views = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`
export const Trend = styled.div`
  display: flex;
  align-items: center;
`
export const Trendings = styled.div`
  display: flex;
  flex-direction: column;
`
