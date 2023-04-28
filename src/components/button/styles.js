import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: ${(props) => props.width || 150}px;
  background-color: ${(props) => props.backgroundColor || "#0a1a35"};
  border-color: ${(props) => props.borderColor || "none"};
  outline: none;
  height: ${(props) => props.height || 49}px;
  border-radius: 5px;
  color: ${(props) => props.textColor || "#ffff"};
  font-weight: 500;
  font-family: sans-serif;
  margin: 10px 0;
  cursor: pointer;
  transition: background 0.5s;
`;
