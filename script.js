let imagem = document.querySelector(".starbucks")
let circulo = document.querySelector(".circulo")
let fundo = document.querySelector("body")
let paragrafo = document.querySelector("p")
let input = document.querySelector("#color")

function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaCor(cor) {
    circulo.style.background = cor
}

function trquei(cor, ) {
    fundo.style.backgroundColor = "	#808080"
    paragrafo.style.color = cor
}


/*
function trocaTudo() {
    circulo.style ='clip-path: circle(40%);'
    circulo.style.left = '47%' 
    circulo.style.width ='33%'
    circulo.style.top = '27%'


        TENTAR FAZER QUANDO CLICAR NO BOTÃO RESETA A PAGINA NOVAMENTE/ VOLTE A PAGINA AO NORMAL
} */