frase = "Amo tomar café e um cappuccino bem gostosinho"
contador = 0

for (letra of frase) {
    if (letra == 'a') {
        contador++
    }
}
alert(`Sua frase possui ${contador} letras A!`)

