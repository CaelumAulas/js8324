import { paginaInicial } from '/scripts/storage/paginaInicial.js'
import { carregar } from '/scripts/navegacao/carregar.js'

// Função é um tipo de dado
$botaoHome.addEventListener('click', function (){
    carregar(paginaInicial)
})
