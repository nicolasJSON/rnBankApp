import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: ${RFValue(183)}px;
  height: ${RFValue(46)}px;
  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(8)}px;
  background: ${({theme}) => theme.color.primary};
`;

export const ButtonTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.color.shape};
  font-family: ${({theme}) => theme.font.semiBold}
`
