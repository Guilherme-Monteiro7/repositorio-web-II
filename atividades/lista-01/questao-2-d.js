/*
 * 2.d) Soma de números primos
 */

function ePrimo(num){
    if (num <= 1){
        return false
    }

    for (var i = 2; i < num; i++){
        if (num % i === 0){
         return false;
        }
    }

    return true;
}

var n = parseInt(prompt("Quantos números você quer digitar? "));

var somaPrimos = 0;

for (var i = 1; i <= n; i++){
    var numero = parseInt(prompt("Digite o " + i + "° número: "));

    if(ePrimo(numero)){
        somaPrimos = somaPrimos + numero;
    }
}

alert("a Soma dos Números primos digitados é:" + somaPrimos);
    
