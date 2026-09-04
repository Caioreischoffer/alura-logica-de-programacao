//3. Crie um programa que verifica se uma palavra ou frase é um palíndromo.
essaPalavraEUmPalindromo();


function essaPalavraEUmPalindromo() {
    let palavra = 'rever';
    let separandoAsLetrasDaPalavra = palavra.split('');
    console.log(separandoAsLetrasDaPalavra);
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join('');
        if (palavra == palavraInvertida) {
            console.log('A palavra ' + palavra + ' é um palíndromo!');
        } else {
            console.log('A palavra ' + palavra + ' não é um palíndromo!');
        }
}
essaPalavraEUmPalindromo();

//4. Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.
function ordenarTresNumeros(n1, n2, n3) {
    const numerosOrdenados = [n1, n2, n3].sort((a, b) => a - b);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}