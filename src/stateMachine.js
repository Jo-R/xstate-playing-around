
import { Machine } from 'xstate';

// visualise it: https://xstate.js.org/viz/
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