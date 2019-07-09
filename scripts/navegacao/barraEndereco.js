// Eventos no JS
$inputEndereco.onfocus = mudaEnderecoCompleto
$inputEndereco.onblur = mudaEnderecoResumido

$janelaPrincipal.onload = mudaEnderecoResumido

//função de callback
// Função que é chamada quando um evento acontece
function mudaEnderecoResumido() {
    const url = new URL($janelaPrincipal.contentWindow.location.href)
    $inputEndereco.value = url.hostname
}

function mudaEnderecoCompleto() {
    $inputEndereco.value = $janelaPrincipal.contentWindow.location.href
}
