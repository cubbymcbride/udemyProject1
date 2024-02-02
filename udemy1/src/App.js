import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './Components/layout/NavBar'
import Users from './Components/users/Users';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }

  render() {
   return (
    <div className='App'>
    <NavBar />
      <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    </div>
    );  
    
  }
}

export default App;
