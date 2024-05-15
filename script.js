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
    if (slideAtual < (numeroSlides - 1)) {
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
    if (slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = numeroSlides - 1
    }
    banner.classList.add(slides[slideAtual])
}

// const selecionarSlide = (slideAtual) => {}
const selecionarSlide = (indiceSlide) => {
    slides.forEach(slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])
}

let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=321",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificaco onde os funcionarios devem propor e implementar ideias inovadora"
    }, 
    {
        imagem: "https://unsplash.it/600/400?image=237",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificacao para seu programa de treinamento"
    }, 
    {
        imagem: "https://unsplash.it/600/400?image=1070",
        descricao: "Uma empresa de vendes implementa uma competicao gamificado entre equipes que competem pelo topo do ranking"
    }, 
    {
        imagem: "https://unsplash.it/600/400?image=40",
        descricao: "Uma empresa de saude promove o bem-estar dos funcionarios atraves de um desafio de gamificacao de condicionamento fisico"
    }
]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    // template Strings
    let template = ""

    listaCases.forEach( cardCase => {
        template += `<div class="card">
            <img src="${cardCase.imagem}" alt="">
            <p>${cardCase.descricao}</p>
            <button>Ver Mais</button>
        </div>`
    } )

    elementoLista.innerHTML = template
}