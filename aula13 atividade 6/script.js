let valor = (gasolina, rendimento, distancia) => {
    qntd = distancia / rendimento
    valorfinal = gasolina * qntd

    return valorfinal
}

let gasolina = parseFloat(prompt('Informe o preço da gasolina'))
let rendimento = parseFloat(prompt('Informe o rendimento de seu carro/moto'))
let distancia = parseFloat(prompt('Informe a distância até seu destino final'))
let final = valor(gasolina, rendimento, distancia)

alert(`Você gastará R$${final} em gasolina!`)