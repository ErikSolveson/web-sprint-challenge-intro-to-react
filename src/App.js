import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { BASE_URL } from "./constants";
import Character from "./components/Character";

const App = () => {
  const [charaters, setCharacters] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`${BASE_URL}people/`)
      .then((res) => {
        console.log(res.data);
        setCharacters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {charaters.map((char) => {
        return (
          <Character
            name={char.name}
            height={char.height}
            mass={char.mass}
            films={char.films}
          />
        );
      })}
    </div>
  );
};

export default App;
