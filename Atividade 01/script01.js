/* 1. Crie uma página HTML que tenha um botão com o texto CLIQUE
AQUI PARA MUDAR O TEXTO e logo abaixo do botão um parágrafo
que tenha a seguinte frase AQUI VAI APARECER ALGUMA COISA...

Ao clicar no botão deve ser chamado o prompt para o usuário
digitar o nome dele, assim que o usuário digitar o nome dele o texto
do parágrafo deve ser alterado para "E aí
NOME_DIGITADO_PELO_USUARIO! Você está deixando o seu site
dinâmico." */



// 1º Seleciona os elementos pelo ID
const botao = document.getElementById('my-btn')
const paragrafo = document.getElementById('mensagem')

// 2º Adiciona o ouvinte de evento de clique= addEventListener ('evento', função que será executada ()=>{})
botao.addEventListener('click', () => {

    // 3° Solicita o nome do usuário
    let usuario = prompt('Digite o seu nome:')

    // Verifica se o usuário inseriu o nome. Se usuário não for null e não for uma string vazia
    if (usuario !== null && usuario !== '') {

        paragrafo.textContent = `E aí ${usuario}! Você está deixando o seu site dinâmico.`

    } else {
        paragrafo.textContent = 'Você não inseriu um nome'
    }
})