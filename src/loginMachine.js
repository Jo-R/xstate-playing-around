import { Machine } from "xstate";

// visualise it: https://xstate.js.org/viz/
export const loginMachine = Machine({
  id: "login",
  initial: "awaiting",
  states: {
    awaiting: {
      on: { CHECKEMAIL: "loading" },
    },
    loading: {
      on: {
        EMAILFOUND: "password",
        EMAILNOTFOUND: "register",
        PASSWORDFOUND: "loggedIn",
        PASSWORDNOTFOUND: {
          target: "password",
          actions: "showErrorMessage"
        },
        REGISTERED: "loggedIn",
      },
    },
    password: {
      on: { 
        CHECKPASSWORD: {
          target: "loading",
          actions: "clearErrorMessage" // clear any previous error
          }
      }
    },
    register: {
      on: { SUBMITREG: "loading" },
    },
    loggedIn: { type: "final" },
  },
  context: {
    errorMessage: ""
  }
});

// note can create bits of machine as consts then within the main machin
// ... spread them 
// e.g const thisState = {initial...}
// Machine({
//   states: {
//     name: {
//       ...this state
//     }
//   }
// })
