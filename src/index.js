import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Home from './screens/Home';
import SingUP from './screens/SingUP'
import theme from './styles/theme'

export default function App() {
 return (
   <ThemeProvider theme={theme} >
     <StatusBar
     translucent
     backgroundColor="transparent"
     />
      <SingUP/>
   </ThemeProvider>
  );
}