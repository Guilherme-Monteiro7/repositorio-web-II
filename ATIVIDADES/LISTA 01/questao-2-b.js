/*
 * 2.b) Cálculo do perímetro (circunferência) de um círculo
 */

const raio = parseFloat(prompt("Digite O Valor do raio do circulo: "));

if (isNaN(raio) || raio < 0) {
  alert("Erro: Por favor, insira um valor de raio válido (número positivo).");
} else {

  const perimetro = 2 * Math.PI * raio;

  alert(
  "O perímetro de um círculo com raio " + raio +
  " é: " + perimetro.toFixed(2)
);
}