import React from "react";
import { Container, Label, InputStyle } from "./styles.js";

function Input({ label, value, onChange, placeholder, type, ...rest }) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputStyle
        {...rest}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
}

export default Input;
