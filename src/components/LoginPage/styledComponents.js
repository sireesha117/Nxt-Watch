import styled from 'styled-components'

export const LoginContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:100vh;
`

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh; /* Adjust height to help centering */
  width: 400px; /* Add width to properly center the card */
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

export const LogoImg = styled.img`
height:50px;
width:100px;
padding:10px;
`
