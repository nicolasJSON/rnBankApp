import React from 'react';
import { View } from 'react-native';

import {
Container,
Footer
} from './styles'

import ChatBar from '../../components/ChatBar';

export default function SingUP() {
 return (
   <Container>
       <Footer>       
        <ChatBar/>
       </Footer>
   </Container>
  );
}