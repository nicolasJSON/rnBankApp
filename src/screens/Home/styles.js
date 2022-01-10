import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.color.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(260)}px;
  background: ${({theme}) => theme.color.primary};
`;
