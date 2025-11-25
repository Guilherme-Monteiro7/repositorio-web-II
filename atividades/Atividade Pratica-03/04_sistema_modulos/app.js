import { calcularMedia, VALOR_PI } from './utils/calculadora.js';
import buscarDados from './services/dados.js';

async function main() {
    console.log(`PI carregado: ${VALOR_PI}`);
    const dados = await buscarDados();
    console.log(`Dados recebidos: ${dados}`);
    console.log(`Média calculada: ${calcularMedia(dados)}`);
}

main();