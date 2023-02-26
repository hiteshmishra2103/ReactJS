import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

import CardList from "./components/card-list.component";

class App extends Component {
  constructor() {
    super(); //calling the constructor method of the component

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  //creating a callback function, which will be called when the onChange event will happen on
  //input field

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField };
      },
      () => {}
    );
  };

  //Everytime the react needs to update DOM it runs the render method

  render() {
    //destructuring the objects so that the
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters..."
          onChange={onSearchChange}
        />
        {/* {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))} */}

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
