export const  validarCPF = (cpf) => {
    if (
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
}

export const validarDataDeNascimento = (dataDeNascimento) => {

    if(!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(dataDeNascimento)){
        return false
    }

    let dataFormatada = dataDeNascimento.split('/');
    let ano_aniversario = dataFormatada[2]
    let mes_aniversario = dataFormatada[1]
    let dia_aniversario = dataFormatada[0]

    let data = new Date,
        ano_atual = data.getFullYear(),
        mes_atual = data.getMonth() + 1,
        dia_atual = data.getDate()

    ano_aniversario = +ano_aniversario
    mes_aniversario = +mes_aniversario
    dia_aniversario = +dia_aniversario

    let quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos >= 18
}

