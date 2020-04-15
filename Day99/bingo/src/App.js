import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import DisplayContextProvider from './DisplayContext';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Display/>
    </div>
  );
}

export default App;
