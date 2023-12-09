function onSumClick() {
    num1 = Number(window.document.getElementById("numero1").value)
    num2 = Number(window.document.getElementById("numero2").value)

    result = somar(num1, num1)
    showResult(num1, num2, result)
}

function somar() {
    return num1 + num2
}

function showResult(num1, num2, result) {
    pResult = window.document.getElementById("result")
    pResult.innerText = `o resultado de ${num1} + ${num2} é: ${result}`
}