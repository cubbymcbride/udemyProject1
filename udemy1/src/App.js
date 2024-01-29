import React, { Component } from 'react'
import NavBar from './Components/layout/NavBar'
import UserItem from './Components/users/UserItem';
import './App.css';

class App extends Component {
  render() {
   return (
    <div className='App'>
    <NavBar />
    <UserItem />
    </div>
    );  
    
  }
}

export default App;
