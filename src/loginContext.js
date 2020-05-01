import React, {createContext} from "react";
import {useMachine} from "@xstate/react"
import {loginMachine} from "./loginMachine";
import {initLoginMachineOptions} from "./initLoginMachineOptions";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
  const machineOptions = initLoginMachineOptions();
  const [currentState, send] = useMachine(loginMachine, machineOptions);

  // alternatively could define these somwhere and export/import them
  // TODO pros and cons of using context for this stuff
  const checkEmail = () => {
    send("CHECKEMAIL");
  };

  const emailFound = () => {
    send("EMAILFOUND");
  }

  const emailNotFound = () => {
    send("EMAILNOTFOUND");
  }

  const sendCheckPassword = () => {
    send("CHECKPASSWORD");
  }

  const passwordFound = () => {
    send("PASSWORDFOUND");
  }

  const passwordNotFound = () => {
    send("PASSWORDNOTFOUND", {value: "Password not found, try again"});
  }

  const sendSubmitReg = () => {
    send("SUBMITREG");
  }

  const registerdOk = () => {
    send("REGISTERED");
  }

  return(
    <LoginContext.Provider
      value={{currentState, 
      checkEmail, 
      emailFound, 
      emailNotFound,
      sendCheckPassword,
      passwordFound,
      passwordNotFound,
      sendSubmitReg,
      registerdOk}
    }>
      {children}
    </LoginContext.Provider>
  );
}