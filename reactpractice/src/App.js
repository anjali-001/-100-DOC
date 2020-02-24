import React from 'react';
import logo from './logo.svg';
import './App.css';
import Practice1 from './components/Practice1'
import MyInfo from './components/MyInfo';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Joke from './components/Joke'
import TodoItem from './components/TodoItem';
import todosData from './components/todosData';



function App() {
  const TodoItems = todosData.map(item => <TodoItem key = {item.id} item={item}/>)

  return (

    
    <div className="App">

      {TodoItems}
      {/* <Joke/> */}

    {/* <Practice1/>
    <MyInfo/>
    <Navbar/>
    <MainContent/>
    <Footer/> */}
      
    </div>
  );
}

export default App;
