import styled from 'styled-components';
import { View, Text } from 'react-native';
import { colors } from '../../styles';

export const MainWrapper = styled(View)`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: ${colors.white};
`;