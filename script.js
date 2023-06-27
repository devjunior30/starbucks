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

function trquei(parametro) {
    fundo.style.backgroundColor = "	#808080"
    paragrafo.style.color = 'gold'
}

function troquei() {
    fundo.style.backgroundColor ="rgb(105,89,205)"
    paragrafo.style.color = 'red'
}

function troquei2() {
    fundo.style.backgroundColor ="#8B0000"
    paragrafo.style.color = 'white'
}

/*
function trocaTudo() {
    circulo.style ='clip-path: circle(40%);'
    circulo.style.left = '47%' 
    circulo.style.width ='33%'
    circulo.style.top = '27%'
} */