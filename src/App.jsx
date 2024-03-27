import { useState, useEffect } from "react";
import './App.css'
import { CardContainer } from './assets/components/CardContainer'

function App() {

  const [poke, setPoke] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
      const response = await fetch(url);
      const data = await response.json();
      setPoke(data.results);
    };

    consultarApi();
  }, []);

  useEffect(() => {
    console.log(poke);
  }, [poke]);

  return (
    <>
      <CardContainer poke={poke}/>
    </>
  )
}

export default App
