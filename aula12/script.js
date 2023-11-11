let temp = parseInt(prompt("Qual a temperatura da sua cidade?"))

if (temp >= 35) {
    alert("Está muito quente!")
}
else if (temp <= 25) {
    alert("Está muito frio!")
}
else if (temp > 25 & temp < 30) {
    alert("Está d boas!")
}
else {
    alert("Error")
}