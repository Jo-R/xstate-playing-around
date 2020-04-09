
import { Machine } from 'xstate';

// example from the docs https://xstate.js.org/docs/packages/xstate-react/#api
export const stateMachine = Machine({
  id: 'login',
  initial: 'awaiting',
  states: {
    awaiting: {
      on: { SENDEMAIL: 'loading' }
    },
    loading: {
      on: { 
        COMPLETE: 'done',
        NOTFOUND: 'notFound'
      }
    },
    done: {type: 'final'},
    notFound: {type: 'final'}
  }
});