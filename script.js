// let menu = document.querySelector("menu")
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")

function abrirFecharMenu() {

// se o menu esta fechado
    if (menu.classList.contains("menu-fechado")) {
        // abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar o icone x
        iconeX.style.display = "inline"

        // Esconder icone de Barras
        iconeBarras.style.display = "none"

    } else {
        // fechar o menu
        menu.classList.add("menu-fechado")

        // Esconder o icone X
        iconeX.style.display = "none"

        // Mostrar icone barras
        iconeBarras.style.display = "inline"
    }

}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

// Funcao carrosel

let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    // Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    // Muda a posicao da lista de slides, para mostrar o slideAtual
    if(slideAtual < (numeroSlides - 1) ) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    // Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

const mostrarSlideAnterior = () => {
    // Remove slide anterior
    banner.classList.remove(slides[slideAtual])
    if(slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = numeroSlides - 1
    }
    banner.classList.add(slides[slideAtual])
}