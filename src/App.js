import React, { useState } from "react";
import { Input } from "./components/Input";
import { useMachine } from "@xstate/react";
import { stateMachine } from "../src/stateMachine";
import { userData } from "./dummyUserData";
import styled from "styled-components";

// TODO
// - input field style
// - pull stuff out to components and add proptypes
// - build the reg form
// - fail message if password fails
// - loading spinner
// - local storage for user deets
// then actually do some more stuff with x-state which is the whole point of this!

function App() {
  const [state, send] = useMachine(stateMachine);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInputChange = (evt) => {
    const em = evt.target.value;
    setEmail(em);
  };

  const findEmailHandler = () => {
    send("CHECKEMAIL");
    setTimeout(() => {
      if (email === userData.users.email) {
        send("EMAILFOUND");
      } else {
        send("EMAILNOTFOUND");
      }
    }, 1000);
  };

  const handlePasswordInputChange = (evt) => {
    const pwd = evt.target.value;
    setPassword(pwd);
  };

  const checkPasswordHandler = () => {
    send("CHECKPASSWORD");
    setTimeout(() => {
      if (password === userData.users.password) {
        send("PASSWORDFOUND");
      } else {
        send("PASSWORDNOTFOUND");
      }
    }, 1000);
  };

  const registerHandler = () => {
    send("SUBMITREG");
    setTimeout(() => {
      send("REGISTERED");
    }, 1000);
  };

  return (
    <>
      <CenteredHeader>
        <h1>Logging in with x-state</h1>
      </CenteredHeader>
      <LoginContainer>
        {state.value === "loading" && <p>Loading...</p>}
        {state.value === "awaiting" && (
          <>
            <Input
              id="email"
              labelText="Enter your email: "
              onChange={handleEmailInputChange}
            />
            <StyledButton onClick={findEmailHandler}>Go</StyledButton>
          </>
        )}

        {state.value === "password" && (
          <>
            <Input
              id="password"
              labelText="Enter password: "
              onChange={handlePasswordInputChange}
            />
            <StyledButton onClick={checkPasswordHandler}>Enter</StyledButton>
          </>
        )}
        {state.value === "register" && (
          <>
            <p>create a register form...</p>
            <button onClick={registerHandler}>Submit</button>
          </>
        )}
        {state.value === "loggedIn" && <h1>You're logged in</h1>}
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
  background-color: ${({ theme }) => theme.colors.light};
  padding: 5em;
  border-radius: 10px;
  color: #1d1e2c;
  box-shadow: 20px 20px 60px #625375, -20px -20px 60px #84719f;
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.black};
  padding: 3px 10px;
`;
