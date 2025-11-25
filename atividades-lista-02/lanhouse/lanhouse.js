const frm = document.querySelector("#formLanHouse");
const outPagar = document.querySelector("#outPagar");
const outErro = document.querySelector("#outErro");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

 
    const valor15Min = Number(frm.inValor.value);
    const tempoUso = Number(frm.inTempo.value);

    outPagar.textContent = "";

    if (isNaN(valor15Min) || isNaN(tempoUso) || valor15Min <= 0 || tempoUso <= 0) {
        outErro.textContent = "Por favor, preencha os valores corretamente.";
        frm.inValor.focus();
        return;
    }

    const numIntervalos = Math.ceil(tempoUso / 15);
    const valorTotal = numIntervalos * valor15Min;

    outErro.textContent = "";

    outPagar.textContent = `Valor a pagar: R$ ${valorTotal.toFixed(2)}`;
});