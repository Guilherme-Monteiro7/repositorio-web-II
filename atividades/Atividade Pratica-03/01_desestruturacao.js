// === 1.1 API e Configurações ===
console.log("--- 1.1 API ---");
const respostaApi = { id: 101, username: "user_a", email: "a@ex.com", status: "ativo" };

// Destructuring
const { username, email } = respostaApi;
console.log("Username/Email:", username, email);

// Rest
const { id, ...dadosComplementares } = respostaApi;
console.log("Resto:", dadosComplementares);

// Spread
const configPadrao = { tema: 'dark', notificacoes: true };
const configUsuario = { notificacoes: false };
const configFinal = { ...configPadrao, ...configUsuario };
console.log("Config Final:", configFinal);


// === 1.2 Argumentos de Função ===
console.log("\n--- 1.2 Argumentos ---");
function registrarEvento(tipo, ...metadados) {
    console.log(`Evento: ${tipo}`);
    console.log("Metadados:", metadados);
}
registrarEvento("click", { x: 10 }, "mouse");


// === 1.3 Props de UI ===
console.log("\n--- 1.3 Props UI ---");
const props = {
    id: "btn-submit",
    className: "btn-primary",
    onClick: () => {},
    "data-acao": "enviar",
    disabled: true,
    title: "Enviar"
};

function prepararPropsBotao(propriedades) {
    const { id, className, onClick, ...atributosNativos } = propriedades;
    const padrao = { id: 'default', type: 'button', disabled: false };

    // Spread: padrao < nativos < override
    return { ...padrao, ...atributosNativos, disabled: false };
}

console.log(prepararPropsBotao(props));