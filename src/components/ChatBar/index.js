import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import {
Container,
Keyboard
} from './styles';
import SendIcon from '../../assets/svg/ChatBar/send_Icon.svg'

export default function ChatBar({texto,armazenarMensagens, enviarMensagem}) {
 return (
   <Container>
       <Keyboard
       value={texto}
       onChangeText={ armazenarMensagens }
       />
        <TouchableWithoutFeedback onPress={ enviarMensagem }>
          <SendIcon/>
        </TouchableWithoutFeedback>
   </Container>
  );
}