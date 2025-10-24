/*
 * 2.c) Cálculo de nota final (média ponderada) e status de aprovação
 */

const n1 = parseFloat(prompt("Informe a Nota da N1: "));
const n2 = parseFloat(prompt("Informe a Nota da N2: "));

const pesoN1 = 2;
const pesoN2 = 3;
const somaPesos = pesoN1 + pesoN2;
const notaMinimaAprovacao = 7.0;

if (isNaN(n1) || isNaN(n2) || n1 < 0 || n2 < 0 || n1 > 10 || n2 > 10) {
    alert("Insira Notas Válidas (Entre 0 e 10).")
} else {
    const mediaFinal = (n1 * pesoN1 + n2 * pesoN2) / somaPesos;

    let status;
    if (mediaFinal >= notaMinimaAprovacao){
        status = "Aprovado";
    } else {
        status = "Reprovado"
    }

    alert(
      `Sua Nota Final é: ${mediaFinal.toFixed(1)}\nStatus: ${status}`
    );
}
