import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: ${RFValue(330)}px;
  max-height: ${RFValue(112)}px;
  padding: 0px 9px;
  
  background: ${({theme}) => theme.color.background_light};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
`;

export const ChatBallonText = styled.Text`
  color: ${({theme}) => theme.color.shape};
  font-size:18px;
  font-family: ${({theme}) => theme.font.regular};
`;
