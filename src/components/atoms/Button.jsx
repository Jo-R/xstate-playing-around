import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  return (
    <StyledButton onClick={props.onClickHandler} className={props.className}>
      {props.buttonText}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.black};
  padding: 5px 10px;
  border-radius: 3px;
`;
