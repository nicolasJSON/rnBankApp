import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.color.background};
`;

export const Header = styled.View`
  width:100%;
  
  margin-top: ${RFValue(30)}px;
  align-items: center;

  flex-direction: row;
  padding: 0 20px;
`;

export const HeaderText = styled.Text`
  margin-left: ${RFValue(55)}px;

  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.color.text};
  font-family: ${({theme}) => theme.font.medium};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 19px;
`;

export const InformationContent = styled.View`
  margin-top: ${RFValue(26)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.color.text};
  font-family: ${({theme}) => theme.font.medium};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.color.text};
  font-family: ${({theme}) => theme.font.regular};

  line-height: 17px;
`;

export const InformationPixContent = styled.View`
  margin-top: ${RFValue(32)}px;
`;

export const PixInputContainer = styled.View`
  width: 100%;
  height: ${RFValue(45)}px;

  border-radius: ${RFValue(8)}px;
  background: ${({theme}) => theme.color.background_light};
`;

export const PixTextInput = styled.TextInput.attrs({
  placeholder: 'Inclua aqui a chave pix de quem você quer enviar',
  placeholderTextColor: '#E1E1E6',
  autoCorrect: false,
  autoCapitalize: 'none',
  keyboardType: 'email-address'
})`
  width: 97%;
  font-size: ${RFValue(12)}px;
  padding-left: 12px;
  color: ${({theme}) => theme.color.text};
  font-family: ${({theme}) => theme.font.regular};
`;

export const Footer = styled.View`
  height: 60%;
  justify-content: flex-end;
  align-items: center;
`;