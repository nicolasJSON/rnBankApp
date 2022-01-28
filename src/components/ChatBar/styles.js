import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(46)}px;
  flex-direction: row;
  align-items: center;
  padding: 0px 14px;
  
  border-radius: 20px;
  background: ${({theme}) => theme.color.shape};
`;

export const Keyboard = styled.TextInput.attrs({
    placeholder: 'Digite seu CPF...',
    placeholderTextColor: '#22282E'
})`
  width: 88%;
  top: 2px;
  color: ${({theme}) => theme.color.background_light};
  font-size:14px;
  font-family: ${({theme}) => theme.font.regular};
`;
