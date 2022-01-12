import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import {
Container,
Keyboard
} from './styles';
import SendIcon from '../../assets/svg/ChatBar/send_Icon.svg'

export default function ChatBar() {
 return (
   <Container>
       <Keyboard/>
        <TouchableWithoutFeedback>
          <SendIcon/>
        </TouchableWithoutFeedback>
   </Container>
  );
}