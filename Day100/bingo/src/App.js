import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import {Route,Switch} from 'react-router-dom';
import {DisplayContext} from './DisplayContext';
import Display from './components/Display';
import DisplayPlus from './components/DisplayPlus';
import DisplayMinus from './components/DisplayMinus';
import Buttons from './components/Buttons';

function App() {
  const {resetGame} = useContext(DisplayContext);
  return (
    <div className="App">
      <Buttons />
      <Switch>
      <Route path="/" exact component={Display}/>
      <Route path="/plus" exact component={DisplayPlus}/>
      <Route path="/minus" exact component={DisplayMinus}/>
      </Switch>
      <button className="btn" onClick={()=>resetGame()}>Reset Game</button>
    </div>
  );
}

export default App;
