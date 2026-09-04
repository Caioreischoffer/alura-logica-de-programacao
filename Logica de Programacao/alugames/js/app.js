//Os desafios não obrigatórios a seguir objetivam a prática dos conceitos trabalhados nesta aula. Os desafios 1 e 2 estão diretamente relacionados ao projeto Alugames e os demais foram pensados para reforçar o conteúdo de Lógica.

///Vamos praticar?

//1.No projeto Alugames, uma confirmação ao devolver um jogo, solicitando ao usuário que confirme a devolução antes que ela seja concluída. Isso pode ajudar a evitar devoluções acidentais.
//2. No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados.
//3. Crie um programa que verifica se uma palavra ou frase é um palíndromo.
//4. Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Adicionando confirmação antes de devolver o jogo
        if (confirm('Tem certeza que deseja devolver este jogo?')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
    // Chamando a função para contar os jogos alugados após a alteração do status
    function contarJogosAlugados() {
        let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
        console.log(`Número de jogos alugados: ${jogosAlugados}`);
    }
    contarJogosAlugados();
}