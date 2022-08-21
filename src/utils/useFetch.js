import React, { useState, useEffect } from 'react';
import { getPokemonList, getDetailedPokemonList } from '../services/api';

export const useFetchData = () => {

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState({});


  const fetchList = async () => {
    const list = await getPokemonList();
    setPokemonList(list);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return { pokemonList }


};

export default useFetchData;