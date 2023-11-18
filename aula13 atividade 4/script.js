let mult = (a, b, c) => {
    valor = a * b * c

    return valor
}

let num = Number(prompt('Informe um número'))
let num2 = Number(prompt('Informe outro número'))
let num3 = Number(prompt('Informe mais um número'))
let final = mult(num, num2, num3)

alert(final)