import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Greet name="Lakshya" dept="ECE">
         <p>This is children props.</p>
       </Greet>
       <Greet name="Akash" dept="Marine">
         <button>Action</button>
       </Greet>
       <Greet name="Ahiri" dept="BT"/>
       <Welcome name="Lakshya" dept="ECE"/>
       <Welcome name="Akash" dept="Marine"/>
       <Welcome name="Akash" dept="Marine"/>
       {/* <Hello/> */}
       <Message/>
      </div>
    );
  }
}

export default App;
