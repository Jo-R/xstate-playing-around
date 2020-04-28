import React, { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { useMachine } from "@xstate/react";
import { stateMachine } from "../src/stateMachine";
import { userData } from "./dummyUserData";

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
        // TODO these checks (this and pwd) only work for one user in obj
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
        send("PASSWORDNOTFOUND"); // TODO if fail need a message to say try again
      }
    }, 1000);
  };

  const registerHandler = () => {
    send("SUBMITREG");
    setTimeout(() => {
      //TODO actually add user
      send("REGISTERED");
    }, 1000);
  };

  return (
    <>
      {state.value === "loading" && <p>Loading...</p>}
      {state.value === "awaiting" && (
        <>
          <Input
            id="email"
            labelText="Enter your email: "
            onChange={handleEmailInputChange}
          />
          <button onClick={findEmailHandler}>Go</button>
        </>
      )}

      {state.value === "password" && (
        <>
          <Input
            id="password"
            labelText="Enter password: "
            onChange={handlePasswordInputChange}
          />
          <button onClick={checkPasswordHandler}>Enter</button>
        </>
      )}
      {state.value === "register" && (
        <>
          <p>create a register form...</p>
          <button onClick={registerHandler}>Submit</button>
        </>
      )}
      {state.value === "loggedIn" && <h1>You're logged in</h1>}
    </>
  );
}

export default App;
