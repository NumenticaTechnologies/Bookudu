import React from 'react';
import ucPic from './Assets/UnderConstruction/underConstruction.png' 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width="250px" height="250px" src={ucPic}/>
        <p>
          Bookudu Under Construction
        </p>
      </header>
    </div>
  );
}

export default App;
