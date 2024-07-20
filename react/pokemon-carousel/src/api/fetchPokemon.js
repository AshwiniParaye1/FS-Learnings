export async function fetchPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (response.ok) {
      return {
        error: null,
        response: await response.json(),
      };
    }

    throw new Error(`Error fetching pokemon id: ${id}`);
  } catch (error) {
    return {
      error: error,
      response: null,
    };
  }
}
