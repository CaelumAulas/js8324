import { carregar } from '/scripts/navegacao/carregar.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

// Eventos no JS
$inputEndereco.addEventListener('focus', mudaEnderecoCompleto)
$inputEndereco.addEventListener('blur', mudaEnderecoResumido)

$janelaPrincipal.addEventListener('load', mudaEnderecoResumido)

//função de callback
// Função que é chamada quando um evento acontece
function mudaEnderecoResumido() {
    const url = new URL($janelaPrincipal.contentWindow.location.href)
 
    const ehPaginaLocal= url.host === 'localhost:3000'

    if(!ehPaginaLocal){
        $inputEndereco.value = url.hostname
    } else {
        $inputEndereco.value = url.pathname.replace('/', '')
    }

}

function mudaEnderecoCompleto() {
    const url = new URL($janelaPrincipal.contentWindow.location.href)
    const ehPaginaLocal= url.host === 'localhost:3000'

    if(!ehPaginaLocal){
        $inputEndereco.value = $janelaPrincipal.contentWindow.location.href
    } else {
        $inputEndereco.value = url.pathname.replace('/', '')
    }
}

$inputEndereco.addEventListener('keyup', function carregaDigitado(){
    const evento = arguments[0]

    if(evento.key === 'Enter') {
        const endereco = formataEndereco(this.value)
        carregar(endereco)
    }
})

