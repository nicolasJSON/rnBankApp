import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})`
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;
  align-items: center;
  justify-content: center;

  background: ${({theme}) => theme.color.background_light};
  border-radius: ${RFValue(23)}px;
`;
