/*
 * 3.a) Função calculadora
 */

function calcular (num1, num2, operador){
    if (operador === "+"){
        return num1 + num2;
    } else if (operador === "-"){
        return num1 - num2;
    } else if (operador === "*"){
        return num1 * num2;
    } else if (operador === "/"){
        if (num2 === 0){
            return "Erro: divisão por zero";
        }
        return num1 / num2;
    } else {
        return "Operador Invalido";
    }
}

console.log("10 + 5 = " + calcular(10, 5, "+"));
console.log("10 - 5 = " + calcular(10, 5, "-"));
console.log("10 * 5 = " + calcular(10, 5, "*"));
console.log("10 / 5 = " + calcular(10, 5, "/"));