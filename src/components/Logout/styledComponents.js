import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${props => (props.isLight ? 'white' : '#333')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
`

export const PopupMessage = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const CancelButton = styled.button`
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #e3f2fd;
  }
`

export const ConfirmButton = styled.button`
  color: white;
  background-color: #3b82f6;
  border-color: #3b82f6;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
    border-color: #3b82f6;
  }
`
export const LogOut = styled.button`
  color: #3b82f6; /* Static color for text */
  border-color: #3b82f6; /* Static color for border */
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent; /* Background remains transparent */
  margin: 10px;

  &:hover {
    background-color: #e3f2fd; /* Optional hover effect */
  }
`
