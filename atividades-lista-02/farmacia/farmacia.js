const frm = document.querySelector("#formFarmacia");
const outMedicamento = document.querySelector("#outMedicamento");
const outPreco = document.querySelector("#outPreco");
const outErro = document.querySelector("#outErro");


frm.addEventListener("submit", (e) => {a
    e.preventDefault();

    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value);

    outMedicamento.textContent = "";
    outPreco.textContent = "";

    // Validação de entrada
    if (!medicamento || isNaN(preco) || preco <= 0) {
        outErro.textContent = "Por favor, preencha todos os campos corretamente.";
        frm.inMedicamento.focus();
        return;
    }

    const total = preco * 2;
    const valorComDesconto = Math.floor(total);

    outErro.textContent = "";
    outMedicamento.textContent = `Promoção de ${medicamento}`;
    outPreco.textContent = `Leve 2 por apenas R$ ${valorComDesconto.toFixed(2)}`;
});