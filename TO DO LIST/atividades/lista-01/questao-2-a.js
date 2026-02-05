/*
 * 2.a) Conversor de Real (R$) para Dólar (US$)
 */

const valorEmReal = parseFloat(prompt("Informe O Valor Em Reais: "));
const cotacaoDolar = parseFloat(prompt("informe a Cotação Atual do dolar: "));

let valorEmDolar = valorEmReal / cotacaoDolar;

alert(
    "R$" + valorEmReal.toFixed(2) + "equivalem a U$" + valorEmDolar.toFixed
);