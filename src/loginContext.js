import React, { createContext } from "react";
import { useMachine } from "@xstate/react";
import { loginMachine } from "./loginMachine";
import { initLoginMachineOptions } from "./initLoginMachineOptions";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const machineOptions = initLoginMachineOptions();
  const [currentState, send] = useMachine(loginMachine, machineOptions);

  // using context here is overkill really but does allow defining fx in one place so not
  // got send("STRING") all over place
  const checkEmail = () => {
    send("CHECKEMAIL");
  };

  const emailFound = () => {
    send("EMAILFOUND");
  };

  const emailNotFound = () => {
    send("EMAILNOTFOUND");
  };

  const sendCheckPassword = () => {
    send("CHECKPASSWORD");
  };

  const passwordFound = () => {
    send("PASSWORDFOUND");
  };

  const passwordNotFound = () => {
    send("PASSWORDNOTFOUND", { value: "Password not found, try again" });
  };

  const sendSubmitReg = () => {
    send("SUBMITREG");
  };

  const registerdOk = () => {
    send("REGISTERED");
  };

  return (
    <LoginContext.Provider
      value={{
        currentState,
        checkEmail,
        emailFound,
        emailNotFound,
        sendCheckPassword,
        passwordFound,
        passwordNotFound,
        sendSubmitReg,
        registerdOk,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
