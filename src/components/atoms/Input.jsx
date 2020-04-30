import React from "react";
import styled from "styled-components";

export const Input = (props) => {
  return (
    <>
      <StyledLabel htmlFor={props.id}>{props.labelText}</StyledLabel>
      <StyledInput
        type={props.type}
        id={props.id}
        onChange={props.onChange}
      ></StyledInput>
    </>
  );
};

const StyledLabel = styled.label`
  font-size: 1.5em;
`;

const StyledInput = styled.input`
  min-height: 30px;
  margin-top: 0.5rem;
`;
