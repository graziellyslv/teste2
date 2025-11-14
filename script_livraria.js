// Variáveis globais para o estado do carrinho
let totalCarrinho = 0;
let contadorItens = 0;

/**
 * Função 1: Adiciona um livro ao carrinho de compras e atualiza o total.
 * @param {string} nomeLivro - O nome do livro a ser adicionado.
 * @param {number} preco - O preço do livro.
 */

function adicionarAoCarrinho(nomeLivro, preco) {
    totalCarrinho += preco;
    contadorItens++;

// Seleciona e atualiza o elemento do total
    const elementoTotal = document.getElementById('total_carrinho');
    elementoTotal.textContent = `R$ ${totalCarrinho.toFixed(2)}`;

// Seleciona e atualiza o elemento de itens do carrinho
    const elementoItens = document.getElementById('itens_carrinho');
    elementoItens.textContent = `${contadorItens} item(s) adicionado(s).`;

    console.log(`Livro "${nomeLivro}" adicionado. Novo total: R$ ${totalCarrinho.toFixed(2)}`);
    alert(`"${nomeLivro}" adicionado ao carrinho!`);
}

/**
 * Função 2: Simula o processo de finalização da compra.
 */
function finalizarCompra() {
    if (contadorItens > 0) {
// Exibe o total e uma mensagem de sucesso
        alert(`Compra finalizada! Total a pagar: R$ ${totalCarrinho.toFixed(2)}. Obrigado por comprar na Livraria Programador!`);

// Reseta o estado do carrinho
        totalCarrinho = 0;
        contadorItens = 0;
        document.getElementById('total_carrinho').textContent = 'R$ 0.00';
        document.getElementById('itens_carrinho').textContent = 'Nenhum item.';

    } else {
        alert("Seu carrinho está vazio. Adicione um livro antes de finalizar a compra.");
    }
}


function abrirModal(img) {
    const modal = document.getElementById('modal-img');
    const modalImg = document.getElementById('imgModal');
    modal.style.display = 'block';
    modalImg.src = img.src;
}

function fecharModal() {
    const modal = document.getElementById('modal-img');
    modal.style.display = 'none';
} 