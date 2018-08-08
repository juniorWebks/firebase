import React, { Component } from 'react'
import UserList from './UserList'
import Default from './UserList/Default'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList />
      </div>
    );
  }
}



export default App;
