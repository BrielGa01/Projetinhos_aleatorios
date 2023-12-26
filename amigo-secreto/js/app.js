let listaAmigos = [];
let numerosAnteriores = [];
let listaSorteio = document.getElementById('lista-sorteio');

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');

    if (nomeAmigo.value == '') {
        alert('O nome adicionado é inválido');
        return;
    }

    if (listaAmigos.includes(nomeAmigo.value)) {
        alert('Digite um nome diferente.');
        return;
    }

    listaAmigos.push(nomeAmigo.value);
    document.getElementById('lista-amigos').textContent = listaAmigos.join(', ');
    nomeAmigo.value = '';
}

function sortear() {
    let numeroMinimo = 4;

    if (listaAmigos.length < numeroMinimo) {
        alert(`Você precisa de pelo menos ${numeroMinimo} nomes para realizar o sorteio.`);
        return;
    }

    embaralha(listaAmigos);

    for (let i = 0; i < listaAmigos.length; i++) {

        if (i == listaAmigos.length - 1) {
            listaSorteio.innerHTML += (listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>');
        }
        else {
            listaSorteio.innerHTML += (listaAmigos[i] + ' --> ' + listaAmigos[i + 1] + '<br>');
        }

    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaAmigos = [];
    numerosAnteriores = [];
    document.getElementById('lista-amigos').textContent = '';
    listaSorteio.innerHTML = '';
}