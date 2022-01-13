import React, {useState} from 'react';
import { TextInput } from 'react-native';

import {
Container
} from './styles'

import {validarCPF,validarCNPJ} from '../../utils/validate';

export default function Pix() {
    const [pix, setPix] = useState('')
    const [tipoDePix, setTipoDePix] = useState('')
    
    function pixMask(chavePix){
        let chavePixFormatada = chavePix

        if(chavePix != ''){
            if(isNaN(Number(chavePix))){
                console.log('string')
            }else{
                if(chavePix.length == 11 && validarCPF(chavePix)){
                    chavePixFormatada = chavePix.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
                    setTipoDePix('CPF')
                }else if(chavePix.length == 14 && validarCNPJ(chavePix)){
                    chavePixFormatada = chavePix.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
                    setTipoDePix('CNPJ')
                }else if([11,14].includes(chavePix.length)){
                    setTipoDePix('INVALIDO')
                }
            }
        }
        setPix(chavePixFormatada)
    }

 return (
   <Container>
       <TextInput
       value={pix}
       onChangeText={ (e) => pixMask(e)}
       style={{backgroundColor:"#FFFF", marginTop: 50}}
       />
   </Container>
  );
}