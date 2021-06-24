import styled, { css } from 'styled-components';

const customStyle = css`
  color: white;
  background-color: black;
  border: none;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`
const invertBtnStyle = css`
  color: black;
    background-color: white;
    border: 1px solid black;

    &:hover {
      color: white;
      background-color: black;
    }
`;

const googleBtnStyle = css`
  border: 1px solid #4285f4;
  background-color: #4285f4;
  color: white;
  
  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonType = props => {
  if (props.btnName === 'google-sign-in') {
      return googleBtnStyle  
  }

  return props.inverted ? invertBtnStyle : customStyle;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  padding: 0 15px;
  line-height: 50px;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-family: inherit;
  font-weight: bolder;
  border-radius: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

 
  ${getButtonType}
`;