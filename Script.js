const formulario = document.getElementById("formReserva");

const destino = document.getElementById("destino");

const pessoas = document.getElementById("pessoas");

const erro = document.getElementById("erro");

const resumo = document.getElementById("resumo");


function calcularTotal() {

    const opcao = destino.options[destino.selectedIndex];

    const preco = Number(opcao.dataset.preco) || 0;

    const quantidade = Number(pessoas.value) || 0;

    const total = preco * quantidade;


    resumo.innerHTML = `
        <p>
            Preço por pessoa:
            <strong>${preco.toLocaleString("pt-AO")} Kz</strong>
        </p>

        <p>
            Total:
            <strong>${total.toLocaleString("pt-AO")} Kz</strong>
        </p>
    `;
}


destino.addEventListener("change", calcularTotal);

pessoas.addEventListener("input", calcularTotal);


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    erro.textContent = "";


    const nome = document.getElementById("nome").value.trim();

    const telefone = document.getElementById("telefone").value.trim();

    const destinoEscolhido = destino.value;

    const quantidade = Number(pessoas.value);

    const data = document.getElementById("data").value;


    if (nome.length < 3) {
        erro.textContent = "Digite um nome válido.";
        return;
    }


    if (telefone.length < 9) {
        erro.textContent = "Digite um telefone válido.";
        return;
    }


    if (!destinoEscolhido) {
        erro.textContent = "Escolha um destino.";
        return;
    }


    if (quantidade < 1) {
        erro.textContent = "Informe pelo menos 1 pessoa.";
        return;
    }


    if (!data) {
        erro.textContent = "Escolha a data da viagem.";
        return;
    }


    const opcao = destino.options[destino.selectedIndex];

    const preco = Number(opcao.dataset.preco);

    const total = preco * quantidade;


    const mensagem =
        "Olá! Gostaria de fazer uma reserva.%0A%0A" +

        "Nome: " + nome + "%0A" +
        "Telefone: " + telefone + "%0A" +
        "Destino: " + destinoEscolhido + "%0A" +
        "Pessoas: " + quantidade + "%0A" +
        "Data: " + data + "%0A" +
        "Preço por pessoa: " +
        preco.toLocaleString("pt-AO") + " Kz%0A" +
        "Total: " +
        total.toLocaleString("pt-AO") + " Kz";


    const numeroWhatsApp = "244943169041";


    const url =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        mensagem;


    window.open(url, "_blank");

});
