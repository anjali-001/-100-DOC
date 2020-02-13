import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <RefsDemo/>
        {/* <ParentComp/> */}
        {/* <Table/> */}
        {/* <FragmentDemo/> */}
        {/* <Form/> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        
        <Inline/> */}
        {/* <Stylesheet primary={true}/> */}

        {/* <NameList/> */}
      
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <Counter/>
       {/* <Greet name="Lakshya" dept="ECE">
         <p>This is children props.</p>
       </Greet>
       <Greet name="Akash" dept="Marine">
         <button>Action</button>
       </Greet> */}
       {/* <Greet name="Ahiri" dept="BT"/> */}
       {/* <Welcome name="Lakshya" dept="ECE"/>
       <Welcome name="Akash" dept="Marine"/>
       <Welcome name="Akash" dept="Marine"/> */}
       {/* <Hello/> */}
       {/* <Message/> */}
      </div>
    );
  }
}

export default App;
