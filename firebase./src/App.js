import React, { Component } from 'react'
import UserList from './UserList'
import Default from './UserList/Default'
import Auth from './Auth'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Auth>
        <UserList />
        </ Auth >
      </div>
    );
  }
}



export default App;
