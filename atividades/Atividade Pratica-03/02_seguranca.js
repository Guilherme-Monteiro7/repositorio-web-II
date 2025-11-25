// === 2.1 Cache e Nullish (??) ===
console.log("--- 2.1 Cache ---");
const configuracoes = { bancoDados: 'sql' }; // cache undefined
const tempo = configuracoes.cache?.tempoExpiracao; // Optional Chaining

const valorApi = 0; // 0 é válido
const tempoFinal = valorApi ?? 600; // Nullish respeita o 0
console.log(`Tempo: ${tempoFinal} (undefined seria 600)`);


// === 2.2 Telemetria ===
console.log("\n--- 2.2 Telemetria ---");
const disp1 = { info: { bateria: { nivel: 85 } } };
const disp2 = { info: null };
const disp3 = { info: { bateria: { nivel: 0 } } };

function checkBateria(d) {
    // Retorna -1 apenas se for null/undefined. 0 passa.
    return d.info?.bateria?.nivel ?? -1;
}

console.log("Disp1 (85):", checkBateria(disp1));
console.log("Disp2 (null):", checkBateria(disp2));
console.log("Disp3 (0):", checkBateria(disp3));