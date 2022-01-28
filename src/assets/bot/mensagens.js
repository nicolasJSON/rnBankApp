export const mensagens = [
    {pergunta: false, mensagem: 'Olá! 😀'},
    {pergunta: false, mensagem: 'Obrigado por escolher o RNBank!'},
    {pergunta: false, mensagem: 'As contas do RNBank são sempre atreladas ao CPF, então nao tenha medo caso tenha uma empresa'},
    {pergunta: true, mensagem: 'Qual o numero do seu CPF?', dado: 'CPF'},
    {pergunta: true, mensagem: 'Qual o seu nome?', dado: 'NOME'},
    {pergunta: true, mensagem: 'Qual sua data de nascimento?', dado: 'NASCIMENTO'},
    {pergunta: true, mensagem: 'Digite uma senha de 4 dígitos!', dado: 'SENHA'},
    {pergunta: false, mensagem: 'Estamos analisando os seus dados! Entraremos em contato em breve.'},
]

export const mensagemDeErro = campo => `${campo} invalido, favor informe um ${campo} valido`