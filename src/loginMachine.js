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
        PASSWORDFOUND: {
          target: "loggedIn",
          actions: "loggedInAction"
        },
        PASSWORDNOTFOUND: "password",
        REGISTERED: {
          target: "loggedIn",
          actions: "loggedInAction"
        }
      },
    },
    password: {
      on: { CHECKPASSWORD: "loading" },
    },
    register: {
      on: { SUBMITREG: "loading" },
    },
    loggedIn: { type: "final" },
  },
  context: {
    isLoggedIn: false
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
