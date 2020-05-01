import { assign } from "xstate";


export const initLoginMachineOptions = () => (
  {
    actions: {
      loggedInAction: assign((_, event) => ({
        isLoggedIn: true
      }))
    }
  }
)
