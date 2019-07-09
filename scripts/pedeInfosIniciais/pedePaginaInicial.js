// Explodir o módulo
// Destructuring do modulo
import { aceitouSalvar } from '/scripts/storage/aceitouSalvar.js'
import { paginaInicial as paginaInicialStorage , salvar} from '/scripts/storage/paginaInicial.js'

import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

if(aceitouSalvar === true) {
    // Sombra no módulo // Shadowing
    let paginaInicial = paginaInicialStorage

    if (!paginaInicial) {
        paginaInicial = prompt("Escolha uma página inicial")
    }

    // Type coercion // Conversão de tipo
    // paginaInicial !== NaN && paginaInicial !== 0 && paginaInicial !== null && paginaInicial !== undefined
    if(paginaInicial){        
        const enderecoCompleto = formataEndereco(paginaInicial)    
        salvar(enderecoCompleto)
    }
}
