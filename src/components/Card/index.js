import React from 'react';
import { Wrapper, NameSection, Name } from './styled';
import { Image } from 'react-native';

const Card = ({ imageUrl, name }) => {
  
  return (
    <Wrapper>
      <Image 
        source={{uri: imageUrl}}
        style={{width: 100, height: 100}}
        resizeMode='contain'
      />
      <NameSection>
        <Name>{name}</Name>
      </NameSection>
    </Wrapper>
  )

};

export default Card;