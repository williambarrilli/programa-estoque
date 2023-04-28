import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 8px 5px;
`;

export const InputStyle = styled.input`
  width: ${(props) => props.width || 500}px;
  padding: 12px 20px;
  text-align: center;
  border: 1px solid #0a1a35;
  background: transparent;
  border-radius: 1px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  width: 50%;
  margin: 8px 5px;
`;

// .container {
//   width: 50%;
//   margin: 8px 5px;
// }

// .input {
//   width: 100%;
//   padding: 12px 20px;

//   display: inline-block;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   box-sizing: border-box;
// }

// .label {
//   display: flex;
//   margin-bottom: 4px;
//   font-size: 15px;
// }
