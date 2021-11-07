import React, { useContext, useState } from 'react';
import StateContext from '../context';

const Demo = () => {
  const [value, dispatch] = useContext(StateContext);
  const [input, setInput] = useState('');
  

  const { name } = value;

  const _handleChange = (name) => {
    setInput(name);
  }
  const _handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(
      {
      type: 'CHANGE_NAME',
      name: input,
      },
      // {
      //   type: 'CHANGE_ACTIVITY',
      //   activity: activity
      // }
    );
    setInput('');
  }

  return(
    <>
    <h1>What is the cat doing??</h1>
    <form onSubmit={e => _handleSubmit(e)}>
      <input type='text' name='newVictim' placeholder="Cat's Name" 
        value={input}
        onChange={(event) => _handleChange(event.target.value)}/>
        is
        {/* <select
        name="activity"
        value={activity}
        onChange={(e) => _handleChangeActivity(e)}
      >
        <option defaultValue>Choose an Activity</option>
        <option value="eating">Eating</option>
        <option value="napping">Napping</option>
        <option value="playing">Playing</option>
      </select> */}
        <button type='submit' >Submit</button>
    </form>

    </>
  )

}

export default Demo;
