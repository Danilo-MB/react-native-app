import axios from 'axios';

const path = (id = '') => `https://pokeapi.co/api/v2/pokemon/${id}`;

export const getPokemonList = async () => {
  try {
    const response = await axios.get(path());
    return response.data;
  } catch (error) {
    throw error;
  }
};