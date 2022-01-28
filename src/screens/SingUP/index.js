import React, { useState, useEffect } from 'react';
import { FlatList, Keyboard} from 'react-native';

import {Container, Footer} from './styles';

import ChatBar from '../../components/ChatBar';
import ChatBallons from '../../components/ChatBallons';
import * as bot from '../../assets/bot/mensagens';
import {validarCPF} from '../../utils/validation';

export default function SingUP() {
  const [posicaoBot, setPosicaoBot] = useState(0);
  const [esperandoResposta, setEsperandoResposta] = useState(false);
  const [mensagens, setMensagens] = useState([]);
  const [dadosUsuario, setDadosUsuario] = useState({});
  const [texto, setTexto] = useState('');

  useEffect(() => {
    if (!esperandoResposta && bot.mensagens.length > posicaoBot) {
      if (!mensagens[mensagens.length - 1]?.user) {
        enviarMensagensBot(posicaoBot);
      } else if (validarDados()) {
        console.log('entrou');
        enviarMensagensBot(posicaoBot + 1);
        setPosicaoBot(posicaoBot + 1);
      } else {
        enviarMensagemDeErroBot();
      }

      if (bot?.mensagens[posicaoBot]?.pergunta) {
        setEsperandoResposta(true);
        console.log(esperandoResposta);
      } else {
        setPosicaoBot(posicaoBot + 1);
      }
    }
  }, [mensagens]);

  function enviarMensagemDeErroBot() {
    setMensagens([
      ...mensagens,
      {
        user: false,
        mensagem: bot.mensagemDeErro(bot.mensagens[posicaoBot]?.dado),
      },
    ]);
  }

  function enviarMensagensBot(index) {
    setMensagens([
      ...mensagens,
      {user: false, mensagem: bot.mensagens[index]?.mensagem},
    ]);
  }

  function enviarMensagensUsuario() {
    setMensagens([...mensagens, {user: true, mensagem: texto}]);
    setEsperandoResposta(false);

    let novosDadosUsuario = dadosUsuario;

    novosDadosUsuario[bot.mensagens[posicaoBot].dado] = texto;

    setDadosUsuario(novosDadosUsuario);

    setTexto('');
    Keyboard.dismiss();
  }

  function validarDados() {
    switch (bot.mensagens[posicaoBot].dado) {
      case 'CPF':
        return validarCPF(dadosUsuario.CPF);
      case 'NOME':
        return !/(?:\.|,|[0-9])*/.test(dadosUsuario.NOME);
    }
  }

  return (
    <Container>
      <FlatList
        data={mensagens}
        contentContainerStyle={{marginTop: 35, paddingHorizontal: 14}}
        style={{flexGrow: 1, position: 'absolute'}}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <ChatBallons user={item.user} mensagem={item.mensagem} />
        )}
      />

      <Footer>
        <ChatBar
          texto={texto}
          armazenarMensagens={e => setTexto(e)}
          enviarMensagem={enviarMensagensUsuario}
        />
      </Footer>
    </Container>
  );
}
