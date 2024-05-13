function pegarValor(id) {
    return Number(document.getElementById(id).value);
}

function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function atualizarResultado(valor) {
    document.getElementById('resultado').textContent = valor;
}

let botaoSomar = document.getElementById('botaoSomar');
let botaoSubtrair = document.getElementById('botaoSubtrair');
let botaoMultiplicar = document.getElementById('botaoMultiplicar');
let botaoDividir = document.getElementById('botaoDividir');

botaoSomar.addEventListener('click', function() {
    const valor1 = pegarValor('num1');
    const valor2 = pegarValor('num2');
    const resultadoSoma = somar(valor1, valor2);
    atualizarResultado(resultadoSoma)
});

botaoSubtrair.addEventListener('click', function() {
    const valor1 = pegarValor('num1');
    const valor2 = pegarValor('num2');
    const resultadoSoma = subtrair(valor1, valor2);
    atualizarResultado(resultadoSoma)
});

botaoMultiplicar.addEventListener('click', function() {
    const valor1 = pegarValor('num1');
    const valor2 = pegarValor('num2');
    const resultadoSoma = multiplicar(valor1, valor2);
    atualizarResultado(resultadoSoma)
});

botaoDividir.addEventListener('click', function() {
    const valor1 = pegarValor('num1');
    const valor2 = pegarValor('num2');
    const resultadoSoma = dividir(valor1, valor2);
    atualizarResultado(resultadoSoma)
});