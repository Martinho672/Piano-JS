const TECLAS_BRANCAS = ['z','x','c','v','b','n','m']
const TECLAS_PRETAS = ['s','d','g','h']

const teclas = document.querySelectorAll('.tecla')
const teclasBrancas = document.querySelectorAll('.tecla.branca')
const teclasPretas = document.querySelectorAll('.tecla.preta')

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => playNota(tecla))
})

document.addEventListener('keydown', e =>{
    if(e.repeat)return
    const tecla = e.tecla
    const teclaBrancaIndex = TECLAS_BRANCAS.indexOf(tecla)
    const teclaPretaIndex = TECLAS_PRETAS.indexOf(tecla)

    if(teclaBrancaIndex > -1) playNota(teclasBrancas[teclaBrancaIndex])
    if(teclaPretaIndex > -1) playNota(teclasPretas[teclaPretaIndex])
})

function playNota(tecla){
    const notaAudio = document.getElementById(tecla.dataset.note)
    notaAudio.currentTime = 0
    notaAudio.play()
    tecla.classList.add('active')
    notaAudio.addEventListener('ended',()=> {
        tecla.classList.remove('active')
    })
}