import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-grow:1;
  position:absolute
`;

export const ChatBallonContainer = styled.View`
  padding: 6px 10px;
  margin-bottom: ${RFValue(10)}px;

  background: ${({theme, user }) => user ? theme.color.shape : theme.color.background_light};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: ${({user}) => user ? `8px` : `0px`};
  border-bottom-right-radius: ${({user}) => user ? `0px` : `8px`};
`;

export const ChatBallonText = styled.Text`
  color: ${({theme, user}) => user ? theme.color.text_dark : theme.color.shape};
  font-family: ${({theme}) => theme.font.regular};
`;
