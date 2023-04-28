import React from "react";
import { ButtonStyled } from "./styles.js";

function Button({ onClick, children, buttonType, width, height, ...rest }) {
  const buttonTypes = {
    primary: {
      backgroundColor: "#0a1a35",
      textColor: "#ffff",
      borderColor: "none",
    },
    secondary: {
      backgroundColor: "#ffff",
      textColor: "#0a1a35",
      borderColor: "#0a1a35",
    },
    success: {
      backgroundColor: "#28A745",
      textColor: "#ffff",
      borderColor: "none",
    },
  };

  return (
    <div>
      <ButtonStyled
        {...rest}
        backgroundColor={buttonTypes[buttonType]?.backgroundColor}
        textColor={buttonTypes[buttonType]?.textColor}
        borderColor={buttonTypes[buttonType]?.borderColor}
        onClick={() => onClick()}
        width={width}
        height={height}
      >
        {children}
      </ButtonStyled>
    </div>
  );
}

export default Button;
