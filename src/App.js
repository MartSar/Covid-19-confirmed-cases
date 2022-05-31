
import { useState } from 'react';

import setCoronaData from './setCoronaData';

import './App.css';

function App() {

  const [value, setValue] = useState("");
  const data = setCoronaData(value);

  let confirmed = "";
    if(data !== undefined){
      confirmed = data.data.latest_data.confirmed;
    }
  
  return (
    <div className="App">
  
      <div className='container'>
        <h1>Covid-19 victims</h1>
        <h2>Choose country</h2>
        <select value={value} onChange={e => setValue(e.target.value)}>
          <option disabled selected>Countries</option>
          <option value="ua">Ukraine</option>
          <option value="am">Armenia</option>
          <option value="us">USA</option>
          <option value="de">Germany</option>
          <option value="gr">Greece</option>
        </select>  

          <h2 className='num'>{confirmed}</h2>
          </div>
      </div>
  );
}

export default App;
