let totalGeral = 0;
limpar();

function adicionar() {
    // Recebe o produto selecionado (nome, quantidade, e valor)
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let subtotal = valorProduto * quantidade;
    
    // Adiciona o produto ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;

    // Calcula o preço totalGeral da compra
    totalGeral += subtotal;
    let total = document.getElementById('valor-total');
    total.textContent = `R$ ${totalGeral}`;
    
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = `R$ ${0}`;
    totalGeral = 0;

}