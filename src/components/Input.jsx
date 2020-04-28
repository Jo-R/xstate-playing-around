import React from "react";

export const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input type="email" id={props.id} onChange={props.onChange}></input>
    </>
  );
};
