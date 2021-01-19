import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [level, setLevel] = useState('beginner');

  useEffect( () => {
    console.log(`Expertise level is ${level}...`); 
  }, [level]); // tracks the dependency of this variable and only logs when value changes

  return (
    <>
      <h1>Current expertise level is {level} :) </h1>
      <button onClick= {() => setLevel('beginner')}>
      Begin
      </button>
      <button onClick= {() => setLevel('intermediate')}>
      Intermediate
      </button>
      <button onClick= {() => setLevel('expert')}>
      Expert
      </button>
    
    
    </>
  );
}

export default App;
