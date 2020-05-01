import React, {createContext} from "react";
import {useMachine} from "@xstate/react"
import {loginMachine} from "./loginMachine";
import {initLoginMachineOptions} from "./initLoginMachineOptions";

//ContextProps are currentState (machine state) and a isLoggedIn false until logged in

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
  const machineOptions = initLoginMachineOptions();
  const [currentState, send] = useMachine(loginMachine, machineOptions);

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
    send("PASSWORDNOTFOUND");
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