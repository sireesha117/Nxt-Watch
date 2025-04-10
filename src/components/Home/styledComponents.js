import styled from 'styled-components'

export const Divide = styled.div`
  display: flex;
  flex-direction: row;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: contain; /* Use 'contain' to ensure the image fits within the container */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  //  background-position: right center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 200px;
  color: ${props => (props.isLight ? 'black' : 'white')};
`
export const Right = styled.div`
  padding: 10px;
  background-color: ${props => (props.isLight ? 'white' : 'black')};
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
  padding: 5px;
  font-family: Roboto;
`
export const HomeSuccess = styled.ul`
  display: flex;
  flex-direction: row; /* Lay cards horizontally */
  flex-wrap: wrap; /* Wrap cards to the next row if space runs out */
  justify-content: space-around; /* Spread cards evenly */
  list-style-type: none; /* Remove bullets */
  padding-left: 0; /* Remove padding */
  margin: 0; /* Remove margin */
`
export const Ib = styled.p`
  margin-left: 0px;
`

export const HomeList = styled.li`
  width: 220px; /* Set a fixed width for uniform cards */
  margin: 10px; /* Space between cards */
  display: flex;
  flex-direction: column; /* Stack content vertically */
  /* Center-align items in the card */
  /* Ensure text is centrally aligned */
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
export const HeadingHome = styled.h1`
  font-size: 16px; /* Make the font size small but readable */
  margin: 5px 0; /* Add margin for spacing */
  word-wrap: break-word; /* Ensure long titles break into multiple lines */
  max-width: 200px; /* Restrict the width to fit the card layout */
  text-align: left; /* Align text appropriately */
`
