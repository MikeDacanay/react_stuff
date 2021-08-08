import React from 'react';
import { StateUse } from './components/StateUse/StateUse';
import { EffectUse } from './components/EffectUse/EffectUse';
import { ContextUse } from './components/ContextUse/ContextUse';
import { ReducerUse } from './components/ReducerUse/ReducerUse';
import { RefUse } from './components/RefUse/RefUse';
import { MemoUse } from './components/MemoUse/MemoUse';
import { CallbackUse } from './components/CallbackUse/CallbackUse';
import { Redux } from './components/Redux/Redux';
import { DogSaga } from './components/DogSaga/DogSaga';

import logo from './logo.svg';
import './App.css';

export const StateContext = React.createContext();

const App = props => {
  return(
    <>
      <div className="">---State---</div>
      <StateUse/>  
      <div>---Effect---</div>
      <EffectUse/>
      <div>---Context---</div>
      <ContextUse/>
      <div>---ReducerUse---</div>
      <ReducerUse/>
      <div>--RefUse---</div>
      <RefUse/>
      <div>--MemoUse---</div>
      <MemoUse/>
      <div>--CallbackUse---</div>
      <CallbackUse/>
      <div>--Redux---</div>
      <Redux/>
      <div>--DogSaga---</div>
      <DogSaga/>
    </>
  )
};

export default App;

