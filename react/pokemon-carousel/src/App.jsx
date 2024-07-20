import { useEffect, useState } from "react";
import "./App.css";
import { fetchPokemon } from "./api";

function App() {
  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetchPokemon = async () => {
      setLoading(true);
      setError(null);

      const { error, response } = await fetchPokemon(id);

      if (error) {
        setError(error.message);
      } else {
        setPokemon(response);
      }

      setLoading(false);
    };

    handleFetchPokemon();
  }, [id]);

  return <main>{JSON.stringify({ id, pokemon }, null, 2)}</main>;
}

export default App;
