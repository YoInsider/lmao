cart = [{name: "Mouse Gamer", price: 130},
{name: "PC Gamer", price: 4500},
{name: "Monitor Gamer", price: 800}]

valor = 0

for (item of cart) {
    valor += item.price
}
alert(valor)