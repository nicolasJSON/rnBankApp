import React, {useState} from 'react';
import { TextInput } from 'react-native';

import {
Container,
Header,
HeaderText,
Content,
InformationContent,
Title,
SubTitle,
InformationPixContent,
PixInputContainer,
PixTextInput,
Footer,
} from './styles'

import {validarCPF,validarCNPJ} from '../../utils/validate';
import HandleButton from '../../components/Buttons/HandleButton';
import BackButton from '../../components/Buttons/Backbutton';

export default function Pix() {
    const [pix, setPix] = useState('');
    const [tipoDePix, setTipoDePix] = useState('');
    const [finalizado, setFinalizado] = useState(true);
    
    function pixMask(chavePix){
        let chavePixFormatada = chavePix;

        if(chavePix != ''){
            if(isNaN(Number(chavePix))){
                console.log('string')
            }else{
                if(chavePix.length == 11 && validarCPF(chavePix)){
                    chavePixFormatada = chavePix.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
                    setTipoDePix('CPF')
                    setFinalizado(false)
                }else if(chavePix.length == 14 && validarCNPJ(chavePix)){
                    chavePixFormatada = chavePix.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
                    setTipoDePix('CNPJ')
                    setFinalizado(false)
                }else if([11,14].includes(chavePix.length)){
                    setTipoDePix('INVALIDO')
                    setFinalizado(true)
                }
            }
        }else{
            setFinalizado(true)
        }

        setPix(chavePixFormatada)
    }

 return (
     <Container>
       <Header>
         <BackButton/>
         <HeaderText>Pix com chave</HeaderText>
       </Header>

       <Content>
           <InformationContent>
              <Title>Escolha o tipo de chave</Title>
              <SubTitle>Informe a chave de quem irá receber</SubTitle>
           </InformationContent>

           <InformationPixContent>
              <Title>CHAVE PIX</Title>
              <PixInputContainer>
                <PixTextInput
                value={pix}
                onChangeText={ (e) =>  pixMask(e)}
                />
              </PixInputContainer>
           </InformationPixContent>

           <Footer>
             <HandleButton disabled={finalizado}/>
           </Footer>
       </Content>
   </Container>
  );
}