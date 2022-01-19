import React from 'react';
import { View } from 'react-native';

import {
Button,
ButtonTitle
} from './styles'

export default function HandleButton({disabled}) {
 return (
   <Button 
   onPress={ () => alert('pix realizado')}
   disabled={disabled}
   style={{ opacity: disabled ?  .5 : 1}}>
     <ButtonTitle>CONTINUAR</ButtonTitle>
   </Button>
  );
}