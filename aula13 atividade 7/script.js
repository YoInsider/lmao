let calcularImc = (peso, altura) => {
    imc = peso / (altura * altura)

    if (imc < 18.5) {
        return 'Abaixo do peso'
    }
    else if (imc >= 18.5 & imc <= 24.9) {
        return 'Peso normal'
    }
    else if (imc >= 25 & imc <= 29.9) {
        return 'Pré-obesidade'
    }
    else if (imc >= 30 & imc <= 34.9) {
        return 'Obesidade grau 1'
    }
    else if (imc >= 35 & imc <= 39.9) {
        return 'obesidade grau 2'
    }
    else if (imc > 40) {
        return 'Obesidade grau 3'
    }
}

let peso = parseFloat(prompt('Informe seu peso'))
let altura = parseFloat(prompt('Informe sua altura'))
let final = calcularImc(peso, altura)

alert(final)