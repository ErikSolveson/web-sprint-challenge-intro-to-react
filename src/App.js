import axios from "axios";
// import { response } from "msw";
// import { set } from "msw/lib/types/context";
// import { data } from "msw/lib/types/context";
import React, { useEffect, useState } from "react";
import "./App.css";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const newCharacters = axios
      .get(`https://swapi.dev/api/people`)
      .then((response) => {
        console.log(response.data);
        setCharacters(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="characters">
        {characters &&
          characters.map((entry) => {
            return (
              <Character
                name={entry.name}
                height={entry.height}
                mass={entry.mass}
                hair_color={entry.hair_color}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;
