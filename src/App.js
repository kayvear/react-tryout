import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked((checked) => !checked);
  }
  
  useEffect( () => {
    console.log(`Value of checkbox is ${checked}`)
  }, [checked]);

  return (
    <>
      <input type="checkbox" 
      value ={checked} 
      onChange = {toggle} 
      />
      <p>{checked ? "checked" : 'not checked'}</p>
    </>
  );
}

export default App;
