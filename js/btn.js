function quartos() {
    var botoesContainer = document.querySelector('.bloco1');
    var botoesAdicionados = document.querySelectorAll('.botao-adicional');

    // Verifica se os botões já foram adicionados
    if (botoesAdicionados.length === 0) {
        // Se não foram adicionados, adiciona os botões
        var botoesHTML = `
            <button class="btn3 botao-adicional">Quarto 01</button>
            <button class="btn3 botao-adicional">Quarto 05</button>
            <button class="btn3 botao-adicional">Quarto 10</button>
        `;
        botoesContainer.insertAdjacentHTML('beforeend', botoesHTML);
    } else {
        // Se os botões já foram adicionados, remove-os
        botoesAdicionados.forEach(function(botao) {
            botao.remove();
        });
    }
}

function motivo() {
    var botoesContainer = document.querySelector('.bloco');
    var botoesAdicionados = document.querySelectorAll('.botao-adicional');

    if (botoesAdicionados.length === 0) {
        var botoesHTML = `
            <button class="mtvo2 botao-adicional">Banho</button>
            <button class="mtvo2 botao-adicional">Fortes Dores</button>
            <button class="mtvo2 botao-adicional">Higiêne Pessoal</button>
            <button class="mtvo2 botao-adicional">Parada Cardíaca</button>
            <button class="mtvo2 botao-adicional">Queda</button>
            <button class="mtvo2 botao-adicional">Reclamação</button>
        `;
        botoesContainer.insertAdjacentHTML('beforeend', botoesHTML);
    } else {
        botoesAdicionados.forEach(function(botao) {
            botao.remove();
        });
    }
}