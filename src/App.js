import React from 'react';
import './App.css';
import { Input } from './components/Input';
import { useMachine } from '@xstate/react';
import {stateMachine} from '../src/stateMachine'

function App() {
  const [state, send] = useMachine(stateMachine);
  
  const findEmailHandler = () => {
    send('SENDEMAIL');
    setTimeout(() => {
      send('COMPLETE');
    }, 1000)
  }

  return (
    <>
    <Input id="email" labelText="Enter your email: " />
    <button onClick={findEmailHandler}>Go</button>
    {
      <p>{state.value}</p>
    }
    </>
  );
}

export default App;
