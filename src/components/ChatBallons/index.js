import React from 'react';
import { View } from 'react-native';

import {
Container,
ChatBallonContainer,
ChatBallonText
} from './styles'

export default function ChatBallons({user, mensagem}) {
 return (
      <ChatBallonContainer user={user} mensagem={mensagem}>
        <ChatBallonText mensagem={mensagem} user={user}>{mensagem}</ChatBallonText>
      </ChatBallonContainer>
  );
}