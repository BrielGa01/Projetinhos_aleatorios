function comprar() {
    // Recuperar o tipo, e a quantidade do ingresso
    // Recuperar a quantidade disponivel do ingresso
    // Conferir se ainda é possível comprar
    // Caso a compra não seja possível, exibir um alerta informando isso
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    switch (tipoIngresso) {
        case 'pista':
            let quantidadePista = parseInt(document.getElementById('qtd-pista').innerHTML);

            if (quantidade > quantidadePista) {
                alert(`Quantidade indisponível para a ${tipoIngresso}!`);
            }
            else {
                alert('Compra realizada com sucesso');
                quantidadePista -= quantidade;
                document.getElementById('qtd-pista').innerHTML = quantidadePista;
            }
            break;
        
        case 'superior':
            let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').innerHTML);

            if (quantidade > quantidadeSuperior) {
                alert(`Quantidade indisponível para a ${tipoIngresso}!`);
            }
            else {
                alert('Compra realizada com sucesso');
                quantidadeSuperior -= quantidade;
                document.getElementById('qtd-superior').innerHTML = quantidadeSuperior;
            }
            break;

        case 'inferior':
            let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').innerHTML);

            if (quantidade > quantidadeInferior) {
                alert(`Quantidade indisponível para a ${tipoIngresso}!`);
            }
            else {
                alert('Compra realizada com sucesso');
                quantidadeInferior -= quantidade;
                document.getElementById('qtd-inferior').innerHTML = quantidadeInferior;
            }
            break;

        default:
            alert('O tipo de ingresso desejado é inválido!');
    }
}