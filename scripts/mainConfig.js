// Trazendo o objeto do módulo
// O módulo inteiro
import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js'
import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'

import { Endereco } from '/scripts/endereco/Endereco.js'
import { CakeEnderecoInvalidoError } from '/scripts/error/CLASSECakeEnderecoInvalidoError.js';

$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputAceitouSalvar.checked = storageAceitouSalvar.aceitouSalvar

$botaoSalvar.onclick = onclickSalvar

// declaração de função
// Function declaration
// hoisting quase igual ao var
function onclickSalvar() {

    try {
        const enderecoCompleto = new Endereco($inputPaginaInicial.value)
        // depender Type Coercion
        $inputPaginaInicial.value = enderecoCompleto
        storagePaginaInicial.salvar(enderecoCompleto)
    } catch (error) {
        console.log('erro é um CakeEnderecoInvalidoError', error instanceof CakeEnderecoInvalidoError)
        console.log('erro é um Error', error instanceof Error)
        console.dir(error)

        if (error instanceof CakeEnderecoInvalidoError) {
            $inputPaginaInicial.value = ''
            alert('Endereço inválido')
            console.warn(error.toString())
        } else {
            throw error
        }
    }

    // Expressão de função
    // Function expression
    // Função como valor
    // Função é tipo de variável
    const funcaoSalvar = $inputAceitouSalvar.checked 
        ? storageAceitouSalvar.salvarAceitou
        : storageAceitouSalvar.salvarNaoAceitou

    funcaoSalvar()

}
// Set
// Map
// HashTable
// HashMap
const propriedadesPermantes = ['aceitouTermos', 'aceitouSalvar']

// TODODepois: logica de remover no modulo de storage
$botaoApagar.addEventListener('click', function(){


    const listaLocalStorage = Object.keys(localStorage)
    for(const nomeChave of listaLocalStorage) {
        const estaNaLista = propriedadesPermantes.includes(nomeChave)
        if (!estaNaLista){
            localStorage.removeItem(nomeChave)
        }
    }

    const listaSessionStorage = Object.keys(sessionStorage)
    for(const nomeChave of listaSessionStorage) {
        sessionStorage.removeItem(nomeChave)
    }
})