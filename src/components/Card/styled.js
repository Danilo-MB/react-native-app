import styled from 'styled-components';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../../styles';

const { width } = Dimensions.get('window');

export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  border-width: 1px;
  border-color: ${colors.gray2}
  width: ${width * 0.45}px;
  height: 200px;
  margin-bottom: 10px;
`;

export const NameSection = styled(View)`
  flex-direction: row;
`;

export const Name = styled(Text)`

`;