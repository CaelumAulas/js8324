import { formataEndereco } from "/scripts/endereco/formataEndereco.js";

import { CakeEnderecoInvalidoError } from '/scripts/error/CakeEnderecoInvalidoError.js'

// Função factory
// Função fábrica

// Funções construtoras
// Classe no JavaScript
export function Endereco(endereco) {
    // Quando chamam com new
    // const this = { 
    //     "__proto__": Endereco.prototype
    // }

    if(
        !(this instanceof Endereco)
    ){
        throw new Error('Chamou sem new. Não vai rolar')
    }

    let urlResumida
    let urlCompleta

    endereco = formataEndereco(endereco)

    if(endereco !== 'blank') {
        
        let url
        try {
            url = new URL(endereco)
        } catch(erro) {
            throw new CakeEnderecoInvalidoError()
        }
            
        const ehPaginaLocal= url.host === 'localhost:3000'
        
        if(!ehPaginaLocal){
            urlCompleta = endereco
            urlResumida = url.hostname
        } else {
            const nomePagina = url.pathname.replace('/', '')
            urlCompleta = nomePagina
            urlResumida = nomePagina
        }
    } else {
        urlResumida = 'blank'
        urlCompleta = 'blank'
    }

/* 
    return {
        "urlResumida": urlResumida, 
        "urlCompleta": urlCompleta,
        "__proto__": Endereco.prototype
    }
 */

    this.urlResumida= urlResumida 
    this.urlCompleta= urlCompleta

    Object.freeze(this)

    // return this
}

Endereco.prototype.toString = function () {
    return this.urlCompleta
}
Object.freeze(Endereco.prototype)