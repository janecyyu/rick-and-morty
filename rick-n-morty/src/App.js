import React from "react";
import "./App.css";
import CharacterCard from "./component/CharacterCard";
import NavBar from "./component/NavBar";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    axios.get("https://rickandmortyapi.com/api/character/").then((res) => {
      console.log("api data:", res.data.results);
      this.setState({
        characters: res.data.results,
      })
    }).catch((err) => console.log("error", err));;
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Rick n' Morty App</h1>
        <img
          src="https://www.freeiconspng.com/uploads/rick-and-morty-icon-png-26.png"
          alt="rick and morty icon"
        />
        <CharacterCard character_data={this.state.characters}/>
      </div>
    );
  }
}

export default App;
