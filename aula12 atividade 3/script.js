let peso = parseFloat(prompt("Qual o seu peso?"))
let altura = parseFloat(prompt("Qual a sua altura?"))
let IMC = peso / (altura * altura)

if (IMC <= 18.5) {
    alert("Abaixo do peso!")
}
else if (IMC > 18.5 & IMC <= 24.0) {
    alert("Peso normal")
}
else if (IMC > 25.0 & IMC <= 29.0) {
    alert("Pré-obesidade!")
} 
else if (IMC > 30.0 & IMC <= 34.0) {
    alert("Obesidade grau 1!!")
}
else if (IMC > 35.0 & IMC <= 39.0) {
    alert("Obesidade grau 2!!!")
}
else if (IMC >= 40) {
    alert("Obesidade grau 3!!!!")
}