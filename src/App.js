import React, {Component} from 'react';
import  {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p> Welcome Pilin Junsangsri</p>
      </header>
    </div>
  );
}
*/

// write class Component
class App extends Component {
  constructor() {
    super();        // call constructor method on Component class
    this.state = {
      monsters: [],
      searchField: ''
    }
  //  this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}));
  }

  // Write your own method
  handleChange = e => {
    this.setState({searchField: e.target.value });
  }


  render() {    // build-in method in react component
    // pull value from state and put into a new const name monsters and searchField
    const { monsters, searchField } = this.state; 
    // Above command can be written as
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder = 'Enter Monster here'
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
