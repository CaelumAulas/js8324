
// Expressão de Função Imediatamente Invocada
// Immeadiatelly Invoked Function Expression
// IIFE

import * as storage  from '/scripts/storage/aceitouSalvar.js'

if(storage.aceitouSalvar === null) {
    const aceitouSalvar = confirm("Você aceita que a gente salve suas informações")
    
    const funcaoSalvar = aceitouSalvar
        ? storage.salvarAceitou
        : storage.salvarNaoAceitou

    funcaoSalvar()
}
