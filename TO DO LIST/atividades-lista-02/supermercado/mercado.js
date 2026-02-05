const frm = document.querySelector("#formSupermercado");
const outPromocao = document.querySelector("#outPromocao");
const outDescricao = document.querySelector("#outDescricao");
const outTotal = document.querySelector("#outTotal");
const outErro = document.querySelector("#outErro");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    outPromocao.textContent = "";
    outDescricao.textContent = "";
    outTotal.textContent = "";

    if (!produto || isNaN(preco) || preco <= 0) {
        outErro.textContent = "Por favor, preencha os campos corretamente.";
        frm.inProduto.focus();
        return;
    }

    const precoTerceiro = preco / 2;
    const total = (preco * 2) + precoTerceiro;

    outErro.textContent = "";

    outPromocao.textContent = `Promoção: Leve 3 ${produto}`;
    outDescricao.textContent = `2 por R$ ${preco.toFixed(2)} cada + 1 por R$ ${precoTerceiro.toFixed(2)}`;
    outTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
});