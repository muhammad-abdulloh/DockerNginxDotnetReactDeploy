import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      users: []
    }
  }

  getUsers = async () => {
    var responce = await fetch(
      "api/users",
      {
        method: 'get'
      }
    )

    var responceJson = await responce.json();
    this.setState({
      users: responceJson
    })
  }

  render(){
    const users = this.state.users.map( (item, index) => <li key={index}>{item.name}</li> )

    return (
      <div className='App'>
        <button onClick={this.getUsers}> Malumotlarni olish test  </button>
        <ul>{users}</ul>
      </div>
    )
  }
}

export default App;
