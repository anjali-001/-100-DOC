import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewFile from './NewFile';
import Practice1 from './Practice1';
import Count from './Count';
import Logging from './Logging';
import Life from './Life'
import Form from './Form'

function App() {
  return (
    <div className="App">
      <Form/>
      {/* <Life/> */}
      {/* <Logging/> */}
      {/* <Count/> */}
      {/* <Practice1/> */}
      {/* <NewFile/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
