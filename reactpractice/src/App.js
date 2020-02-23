import React from 'react';
import logo from './logo.svg';
import './App.css';
import Practice1 from './components/Practice1'
import MyInfo from './components/MyInfo';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';



function App() {
  return (

    
    <div className="App">
    <Practice1/>
    <MyInfo/>
    <Navbar/>
    <MainContent/>
    <Footer/>
      
    </div>
  );
}

export default App;
