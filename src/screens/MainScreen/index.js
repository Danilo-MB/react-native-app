import React, { useEffect, useState } from 'react';
import { MainWrapper, InputSection, CardsSection, StyledScrollView } from './styled';
import SearchInput from '../../components/SearchInput';
import SearchIcon from '../../components/icons/Search';
import { colors } from '../../styles';
import Card from '../../components/Card';
import useFetchData from '../../utils/useFetch';
import { getPokemonList, getDetailedPokemonList } from '../../services/api';

const MainScreen = () => {

  const [pokemonList, setPokemonList] = useState([]);

  const fetchList = async () => {
    const list = await getPokemonList();
    setPokemonList(list);
  };

  useEffect(() => {
    fetchList();
    console.log(getDetailedPokemonList(), 'detailed')
  }, []);

  return (
    <MainWrapper>
      <InputSection>
        <SearchInput
          placeholder='Buscar un pokemon' 
          rightIcon={<SearchIcon color={colors.gray} width={20} height={20} />}
        />
      </InputSection>
      <StyledScrollView showsVerticalScrollIndicator={false}>
        <CardsSection>
          {pokemonList?.map((element, index) => {
          return (  
          <Card 
            key={index}
            // name={element.name}
            // imageUrl={getPokemonInfo(index).sprites.back_default}
            // imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAPr1c95EfdOcQjopSHzcD-oo55yvewyLbQDMf_69InY7Mz4093ubqUGUP9OAEMGMUCU&usqp=CAU'
          />)
        })}
        </CardsSection>
      </StyledScrollView>
    </MainWrapper>
  )

};

export default MainScreen;