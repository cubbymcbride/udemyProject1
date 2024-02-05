import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './Components/layout/NavBar'
import Users from './Components/users/Users';
import Search from './Components/users/Search';
import Alert from './Components/layout/Alert';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

 
  // Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&clientSecret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  };

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false })

  // Set Alert
  setAlert = ( msg, type) => {
    this.setState ({ alert: { msg, type } })
  };
 
  render() {
    const { loading, users } = this.state;
   return (
    <div className='App'>
    <NavBar />
      <div className="container">
        <Alert alert={this.state.alert} />
        <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers} 
          showClear={ users.length > 0 ? true : false }
          setAlert={this.setAlert}
        />
        <Users loading={loading} users={users} />
      </div>
    </div>
    );  
    
  }
}

export default App;
