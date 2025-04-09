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
`
