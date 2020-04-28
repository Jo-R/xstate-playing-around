import { Machine } from "xstate";

// visualise it: https://xstate.js.org/viz/
export const stateMachine = Machine({
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
        PASSWORDNOTFOUND: "password",
        REGISTERED: "loggedIn",
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
});
