import State from "./UseState/State.js";
import Reducer from "./UseReducer/Reducer.js";
import Effect from "./UseEffect/Effect.js";
import React, { useState } from 'react'
import Settings from "./UseContext/Settings.js"
import Parent from "./UseImperativeHandle/Parent.js";

import LayoutEffect from "./UseLayoutEffect/LayoutEffect.js";


export const contxt = React.createContext(); 

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <LayoutEffect></LayoutEffect>
    </div>
  );
}

export default App;
