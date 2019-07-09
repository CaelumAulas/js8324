// Trazendo o objeto do módulo
// O módulo inteiro
import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js'
import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'

import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputAceitouSalvar.checked = storageAceitouSalvar.aceitouSalvar

$botaoSalvar.onclick = onclickSalvar

// declaração de função
// Function declaration
// hoisting quase igual ao var
function onclickSalvar() {
    const enderecoCompleto = formataEndereco($inputPaginaInicial.value)
    $inputPaginaInicial.value = enderecoCompleto
    storagePaginaInicial.salvar(enderecoCompleto)

    // Expressão de função
    // Function expression
    // Função como valor
    // Função é tipo de variável
    const funcaoSalvar = $inputAceitouSalvar.checked 
        ? storageAceitouSalvar.salvarAceitou
        : storageAceitouSalvar.salvarNaoAceitou

    funcaoSalvar()

}