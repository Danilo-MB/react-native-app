import axios from "axios";

const path = (id = "") => `https://pokeapi.co/api/v2/pokemon/${id}`;

export const getPokemonList = async () => {
  try {
    const response = await axios.get(path());
    console.log(response.data.results, 'response')
    return response.data.results;
  } catch (error) {
    console.log(error, "error del getPokemonList");
    throw error;
  }
};

export const getDetailedPokemonList = async () => {
  const list = [];
  const pokemonList = await getPokemonList();
  await Promise.all(pokemonList.map(poke => {
    return getPokemonData(poke.url).then(result => list.push(result))
  })
  )
  console.log(list, 'list')
  return list
};

// export const getOtherCities = async () => {
//   const cityNames = ['Villa Lugano', 'Tokio', 'Boruku', 'Glenover', 'Hoag'];
//   const cities = [];
//   await Promise.all(
//     cityNames.map(city => {
//       return getCurrentCityInfo(city).then(res => cities.push(res));
//     }),
//   );
//   return cities;
// };

// export const getDetailedPokemonList = async () => {
//   const detailedList = [];
//   const pokemonList = await getPokemonList();
//   await Promise.all(pokemonList.map(poke => {
//     const singlePoke = axios.get(poke.url);
//     detailedList.push(singlePoke);
//   })
//   )
//   console.log(detailedList, 'detailed list')
//   return detailedList;
// };

export const getPokemonData = async (url) => {
  try {
    const response = await axios.get(url);
    // console.log(response, 'response del getOnePokemon')
    return response.data;
  } catch (error) {
    console.log(error, "error del getOnePokemon");
    throw error;
  }
};
