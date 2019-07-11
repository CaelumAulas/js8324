import { paginaInicial } from '/scripts/storage/paginaInicial.js'
import { carregar } from '/scripts/navegacao/carregar.js'

const paginaAtual = sessionStorage.getItem('paginaAtual')

const endereco = paginaAtual !== null
    ? paginaAtual
    : paginaInicial

carregar(endereco)

//$janelaPrincipal é um Event Emitter
$janelaPrincipal.addEventListener('load', function salvaPaginaAtual(){
    sessionStorage.setItem('paginaAtual', this.contentWindow.location.href)
})
