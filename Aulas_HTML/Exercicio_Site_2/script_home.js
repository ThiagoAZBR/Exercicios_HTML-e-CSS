// Arquivo Js para auxiliar com a transição de imagens

let time = 3500,
    currentimageIndex = 0,
    images = document.querySelectorAll('.artistes img')

    max = images.length;

function nextimage() {

    images[currentimageIndex].classList.remove('selected')


    currentimageIndex++

    if (currentimageIndex >= max) 
        currentimageIndex = 0

    images[currentimageIndex].classList.add('selected')

}


function start() {

    setInterval(() => {
        //Troca de Imagem
        nextimage()
    }, time)

}

window.addEventListener('load', start)