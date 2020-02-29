import React from 'react';
import logo from './logo.svg';
import './App.css';
import Meme from './Meme'
import Header from './Header'
import MemeGenerator from './MemeGenerator';

function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
      <MemeGenerator/>
    </div>
  );
}

export default App;
