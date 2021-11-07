import React, {useReducer} from 'react';
import { StateProvider} from './context';
import Demo from './components/DemoComponent';


function App() {
  const initialState = {
    name: 'Ryan',
    activity: 'Pooping',
  };

  const reducer = (state, action) => {
    const { name, activity } = action;
    switch (action.type){
      case "CHANGE_NAME":
        return {
          ...state,
          name,
        };
        case "ACTION_NAP":
          return {
            ...state,
            activity,
          };
        
        case "ACTION_EAT": 
          return {
            ...state,
            activity,
          };
        
        case "ACTION_PLAY":
          return{
            ...state,
            activity,
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
