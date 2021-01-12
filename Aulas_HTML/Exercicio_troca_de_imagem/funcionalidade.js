let clarice_linspector = document.querySelector('#clarice_linspector')
let principal_clarice_linspector = document.querySelector('#principal_clarice_linspector')

let jorge_amado = document.querySelector('#jorge_amado')
let principal_jorge_amado = document.querySelector('#principal_jorge_amado')

let machado_de_assis = document.querySelector('#machado_de_assis')
let principal_machado_de_assis = document.querySelector('#principal_machado_de_assis')

let jose_de_alencar = document.querySelector('#jose_de_alencar')
let principal_jose_de_alencar = document.querySelector('#principal_jose_de_alencar')

let luiz_gama = document.querySelector('#luiz_gama')
let principal_luiz_gama = document.querySelector('#principal_luiz_gama')

let images = document.querySelectorAll('.corpo img')
let max = images.length
let botao = document.querySelector('#botao_para_deixar_a_imagem_escurar')
let escolhido = document.querySelector('.corpo img.escolhido')

let div_vazia_para_escurecer_a_imagem = document.querySelector('.div_vazia_para_escurecer_a_tela')

clarice_linspector.addEventListener('click', function() {


    for (var i = 0;; i++) {
        console.log(i);
        if (i >= max) break;

        images[i].classList.remove('escolhido')
        // more statements
    }

    principal_clarice_linspector.classList.add('escolhido')


})

jorge_amado.addEventListener('click', function() {

    for(var i = 0;; i++) {

        console.log(i)
        if (i >= max) break;

        images[i].classList.remove('escolhido')

    }

    principal_jorge_amado.classList.add('escolhido')

})

machado_de_assis.addEventListener('click', function() {

    for ( var i = 0;; i++) {

        console.log(i)
        if ( i >= max ) break;

        images[i].classList.remove('escolhido')

    }
    
    principal_machado_de_assis.classList.add('escolhido')

})

jose_de_alencar.addEventListener('click', function() {

    for ( var i = 0;; i++) {

        console.log(i)
        if ( i >= max ) break;

        images[i].classList.remove('escolhido')

    }

    principal_jose_de_alencar.classList.add('escolhido')

})

luiz_gama.addEventListener('click', function() {

    for ( var i = 0;; i++ ) {

        console.log(i)
        if ( i >= max ) break;

        images[i].classList.remove('escolhido')

    }

    principal_luiz_gama.classList.add('escolhido')

})

botao.addEventListener('click', function() {

    if (div_vazia_para_escurecer_a_imagem.style.display === 'block') {

        div_vazia_para_escurecer_a_imagem.style.display = 'none';

    } 
    else {

        div_vazia_para_escurecer_a_imagem.style.display = 'block'
    }
})