import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = [
        {first_name: "Tim", lastName: "Ryan"},
        {first_name: "Sharon", lastName: "Clancy"},
        {first_name: "Raymond", lastName: "Cunningham"}
        ]

    render() {
      return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <Person age={14}/>
          <Person age={18}>its working</Person>
          <Person age={11}/>
      </div>
      )
  }
}

export default App;
