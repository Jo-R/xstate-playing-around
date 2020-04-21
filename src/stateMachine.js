import { Machine } from "xstate";

// visualise it: https://xstate.js.org/viz/
export const stateMachine = Machine({
  id: "login",
  initial: "awaiting",
  states: {
    awaiting: {
      on: { SENDEMAIL: "loading" },
    },
    loading: {
      on: {
        EMAILFOUND: "password",
        NOTFOUND: "notFound",
        PASSWORDFOUND: "loggedIn",
      },
    },
    password: {
      on: { CHECKPASSWORD: "loading" },
    },
    notFound: { type: "final" },
    loggedIn: { type: "final" },
  },
});
