
// Selecionar os elementos pelo ID
const incrementar = document.getElementById('somar')
const zerarContador = document.getElementById('zerar')
const paragrafo = document.getElementById('mensagem')


let contador = 0

// Ouvinte click para incrementar
incrementar.addEventListener('click', () => {
    contador++
    paragrafo.textContent = `O contador está com ${contador} cliques`
})

// Ouvinte click para zerar
zerarContador.addEventListener('click', () => {
    contador = 0
    paragrafo.textContent = `O contador está com ${contador} cliques`
})





