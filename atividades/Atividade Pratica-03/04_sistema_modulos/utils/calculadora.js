export function calcularMedia(array) {
    if (!array.length) return 0;
    return array.reduce((a, b) => a + b, 0) / array.length;
}

export const VALOR_PI = 3.14159;