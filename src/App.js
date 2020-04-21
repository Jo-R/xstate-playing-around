import React from "react";
import "./App.css";
import { Input } from "./components/Input";
import { useMachine } from "@xstate/react";
import { stateMachine } from "../src/stateMachine";

function App() {
  const [state, send] = useMachine(stateMachine);

  // TODO make the unhappy paths email not found -> register and password not found -> try again
  // then style it up
  const findEmailHandler = () => {
    send("SENDEMAIL");
    setTimeout(() => {
      send("EMAILFOUND");
    }, 1000);
  };

  const checkPasswordHanlder = () => {
    send("CHECKPASSWORD");
    setTimeout(() => {
      send("PASSWORDFOUND");
    }, 1000);
  };

  return (
    <>
      {state.value === "loading" && <p>Loading...</p>}
      {state.value === "awaiting" && (
        <>
          <Input id="email" labelText="Enter your email: " />
          <button onClick={findEmailHandler}>Go</button>
        </>
      )}

      {state.value === "password" && (
        <>
          <Input id="password" labelText="Enter password: " />
          <button onClick={checkPasswordHanlder}>Enter</button>
        </>
      )}
      {state.value === "loggedIn" && <h1>You're logged in</h1>}
    </>
  );
}

export default App;
