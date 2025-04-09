import styled from 'styled-components'

export const HeadContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.isLight ? 'white' : '#424242')};
  color: ${props => (props.isLight ? 'black' : 'white')};
`
export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const HeadLogo = styled.img`
  height: 50px;
  width: 100px;
  padding: 10px;
`
export const Profile = styled.img`
  height: 30px;
  width: 30px;
`
export const ThemeButton = styled.button`
  border-width: 0px;
  background-color: transparent;
`
