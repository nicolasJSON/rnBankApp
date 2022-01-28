import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background: ${({theme}) => theme.color.background};
`;

export const Footer = styled.View`
  flex:1;
  justify-content: flex-end;
  margin-bottom: ${RFValue(22)}px;
`;
