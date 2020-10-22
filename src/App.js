import React, {useReducer} from 'react';
import { StateProvider} from './context';
import Demo from './components/DemoComponent';


function App() {
  const initialState = {
    name: 'Ryan',
  };

  const reducer = (state, action) => {
    const { name} = action;
    switch (action.type){
      case "CHANGE_NAME":
        return {
          ...state,
          name,
        };
        default:
          return state;
    }
  };

  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        <h1>Hello</h1>
        <Demo />
      </StateProvider>
    </div>
  );
}

export default App;
