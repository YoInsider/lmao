let pessoa = (idade, acompanhada) => {
    if (idade >= 18 || acompanhada == 'sim') {
        return 'Pode entrar'
    } else if (idade < 18 & acompanhada == 'não') {
        return 'Não pode entrar'
    }
}

let idade = Number(prompt('Informe sua idade'))
let acompanhada = prompt('Você está acompanhado? (sim/não)')
let final = pessoa(idade, acompanhada)

alert(final)