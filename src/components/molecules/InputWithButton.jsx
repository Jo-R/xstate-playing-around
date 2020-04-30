import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export const InputWithButton = (props) => {
  return (
    <Container>
      <Input
        id={props.inputId}
        type={props.inputType}
        labelText={props.inputLabel}
        onChange={props.inputOnChangeHandler}
      />
      <StyledButton
        onClickHandler={props.buttonOnClickHandler}
        buttonText={props.buttonText}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  width: 40%;
  margin-top: 1.5rem;
  align-self: center;
`;
