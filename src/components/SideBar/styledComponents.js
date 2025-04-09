import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  height: 100vh; /* Ensures the sidebar spans the full viewport height */
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
