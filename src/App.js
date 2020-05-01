import React, { useState, useContext } from "react";
import { InputWithButton } from "./components/molecules/InputWithButton";
import {LoginContext} from "./loginContext";
import { userData } from "./dummyUserData";
import styled from "styled-components";

// TODO
// - pull stuff out to components
// - add proptypes
// - build the reg form component (molecule)
// - loading spinner component
// - local storage for user deets
// then actually do some more stuff with x-state which is the whole point of this!
// manage focus
// guards?
// also this is useful https://codesandbox.io/s/l3r07jkxx9?file=/src/machineConfig.js

function App() {
  const {currentState, 
    checkEmail, 
    emailFound, 
    emailNotFound,
    sendCheckPassword,
    passwordFound,
    passwordNotFound,
    sendSubmitReg,
    registerdOk} = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInputChange = (evt) => {
    const em = evt.target.value;
    setEmail(em);
  };

  const findEmailHandler = () => {
    checkEmail();
    setTimeout(() => {
      if (email === userData.users.email) {
        emailFound();
      } else {
        emailNotFound();
      }
    }, 1000);
  };

  const handlePasswordInputChange = (evt) => {
    const pwd = evt.target.value;
    setPassword(pwd);
  };

  const checkPasswordHandler = () => {
    sendCheckPassword();
    setTimeout(() => {
      if (password === userData.users.password) {
        passwordFound();
      } else {
        passwordNotFound();
      }
    }, 1000);
  };

  const registerHandler = () => {
    sendSubmitReg();
    setTimeout(() => {
      registerdOk();
    }, 1000);
  };
  
  return (
    <>
      <CenteredHeader>
        <h1>Logging in with x-state</h1>
      </CenteredHeader>
      <LoginContainer>
        {currentState.value === "loading" && <p>Loading...</p>}
        {currentState.value === "awaiting" && (
          <>
            <InputWithButton
              inputId="email"
              inputType="email"
              inputLabel="Enter your email: "
              inputOnChangeHandler={handleEmailInputChange}
              buttonOnClickHandler={findEmailHandler}
              buttonText={"Go"}
            />
          </>
        )}

        {currentState.value === "password" && (
          <>
            <InputWithButton
              inputId="password"
              inputType="password"
              inputLabel="Enter password: "
              inputOnChangeHandler={handlePasswordInputChange}
              buttonOnClickHandler={checkPasswordHandler}
              buttonText={"Enter"}
              errorMessage={currentState.context.errorMessage && currentState.context.errorMessage}
            />
          </>
        )}
        {currentState.value === "register" && (
          <>
            <p>create a register form...</p>
            <button onClick={registerHandler}>Submit</button>
          </>
        )}
        {currentState.value === "loggedIn" && <h1>You're logged in</h1>}
      </LoginContainer>
    </>
  );
}

export default App;

const CenteredHeader = styled.div`
  display: grid;
  place-items: center;
  padding-top: 3em;
  font-family: "Audiowide", cursive;
  color: ${({ theme }) => theme.colors.contrast};
`;

const LoginContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 5em;
  border-radius: 10px;
  color: #1d1e2c;
  box-shadow: 20px 20px 60px #625375, -20px -20px 60px #84719f;
`;
