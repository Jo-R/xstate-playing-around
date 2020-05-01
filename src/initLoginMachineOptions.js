import { assign } from "xstate";


export const initLoginMachineOptions = () => (
  {
    actions: {
      showErrorMessage: assign((_, event) => ({
        errorMessage: event.value
      })),
      clearErrorMessage: assign((_, event) =>({
        errorMessage: ""
      }))
    }
  }
)
