import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { MainWrapper } from './styled';
import { getPokemonList } from '../../services/api';

const MainScreen = () => {

  const [pokemonList, setPokemonList] = useState([]);
  console.log(pokemonList, 'list')

  const fetchList = async () => {
    const list = await getPokemonList();
    setPokemonList(list);
    // setIsLoading(false);
};

useEffect(() => {
    fetchList();
}, []);

  return (
    <MainWrapper>
      <Text>Main Screen</Text>
    </MainWrapper>
  )

};

export default MainScreen;