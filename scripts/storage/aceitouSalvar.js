
// exportando uma referencia pra variavel
export let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))

// named export
// export nomeado
// exportar uma referencia
function salvar(valor){
    aceitouSalvar = valor
    localStorage.setItem('aceitouSalvar', valor)
}

export function salvarAceitou(){
    salvar(true)
}

export function salvarNaoAceitou(){
    salvar(false)
}

// exportando valor da variavel
// export default aceitouSalvar