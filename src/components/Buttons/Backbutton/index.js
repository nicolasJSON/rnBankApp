import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
Container,
} from './styles'

export default function Backbutton() {
 return (
   <Container>
       <Icon name="keyboard-backspace" color="#6833E4" size={27}/>
   </Container>
  );
}