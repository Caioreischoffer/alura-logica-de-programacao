//1.Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, exiba uma mensagem de erro apropriada.

// Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }


    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }
//2.Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

function capturarValores() {
    let nome = document.getElementById('campoNome').value;
    let idade = document.getElementById('campoIdade').value;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
    document.getElementById('resultado').textContent = `Nome: ${nome}, Idade: ${idade}`;
}
//3.Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.

function modificarConteudo() {
    let paragrafo = document.getElementById('meuParagrafo');
    paragrafo.textContent = "O conteúdo deste parágrafo foi modificado!";
}
//4.Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

let n1 = 5;
let n2 = 10;
let soma = n1 + n2;
console.log(`A soma de ${n1} e ${n2} é: ${soma}`);

//5.Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.
let sentencas = "Esta é a primeira sentença; Esta é a segunda sentença; Esta é a terceira sentença";
let frases = sentencas.split(';');
console.log(frases);

//6.Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.
let numeros = "1,2,3,4,5";
let arrayNumeros = numeros.split(',');
console.log(arrayNumeros);