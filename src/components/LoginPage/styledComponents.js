import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Roboto;
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
  height: 50px;
  width: 100px;
  padding: 10px;
`

export const InputEle = styled.input`
  margin: 10px;
  width: 100%;
  margin-left: 0px;
`
export const LoginButton = styled.button`
  width: 100%;
  color: '#ffffff';
  border-radius: 5px;
  background-color: #3b82f6;
  border-width: 0px;
  padding: 10px;
  margin: 5px;
  margin-left: 0px;
`
