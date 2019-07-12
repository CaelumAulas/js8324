import { carregar } from '/scripts/navegacao/carregar.js'
import { Endereco } from '/scripts/endereco/Endereco.js'
import { CakeEnderecoInvalidoError } from '/scripts/error/CakeEnderecoInvalidoError.js'

let objetoEndereco

$janelaPrincipal.addEventListener('load', function processaEndereco() {
    objetoEndereco = new Endereco(
        $janelaPrincipal.contentWindow.location.href
    )
})

$inputEndereco.addEventListener('focus', mudaEnderecoCompleto)
$inputEndereco.addEventListener('blur', mudaEnderecoResumido)
$janelaPrincipal.addEventListener('load', mudaEnderecoResumido)

      
//função de callback
// Função que é chamada quando um evento acontece
function mudaEnderecoResumido() {
//    $inputEndereco.value = objetoEndereco['urlResumida']
   $inputEndereco.value = objetoEndereco.urlResumida
}

function mudaEnderecoCompleto() {
    // $inputEndereco.value = objetoEndereco['urlCompleta']
    $inputEndereco.value =  objetoEndereco.urlCompleta
}

$inputEndereco.addEventListener('keyup', function carregaDigitado(){
    const evento = arguments[0]

    if(evento.key === 'Enter') {

        try {
            objetoEndereco = new Endereco(this.value)
            carregar(objetoEndereco)

        } catch(erro) {
            if(erro instanceof CakeEnderecoInvalidoError) {
                alert("URL inválida")
            } else {
                throw erro
            }
        }

    }
})

