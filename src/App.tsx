//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState<any[]>([])
  useEffect(() => {
    //first
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(
      response => {
        console.log(response)
        let {data} = response;
        if(data) setPokemons(data.results);
      }
    ).catch(err => {
      console.log(err)
    })
    //return () => {
      //second
    //}
  }, [])
  
    //let {results} = pokemons
    
  return (
    <div className="App-header">
      <h1>Hello world</h1>
      {
        pokemons.map((e, index)=>
          <div id={index.toString()}>{e.name}</div>
        )
      }

    </div>
  );
}

export default App;
// export interface Welcome {
//   count:    number;
//   next:     string;
//   previous: null;
//   results:  Result[];
// }

// export interface Result {
//   name: string;
//   url:  string;
// }
