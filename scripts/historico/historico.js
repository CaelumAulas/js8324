//TODO Salvar
// Type coercion
const lista = JSON.parse(sessionStorage.getItem('historico')) || []
let posicaoAtual = JSON.parse(sessionStorage.getItem('posicaoHistorico')) || lista.length - 1

export function adiciona(endereco){
    // Bug se acessar exatamente o mesmo site
    const ehItemDoHistorico = lista.includes(endereco)
    
    if(!ehItemDoHistorico) {
        lista.splice(posicaoAtual + 1)
        lista.push(endereco)
        posicaoAtual++

        sessionStorage.setItem('historico', JSON.stringify(lista))
        sessionStorage.setItem('posicaoHistorico', posicaoAtual)
        console.log(lista)
    }
}

 export function voltar() {
    if(posicaoAtual > 0) {
        posicaoAtual = posicaoAtual - 1
        sessionStorage.setItem('posicaoHistorico', posicaoAtual)
        const endereco = lista[posicaoAtual]
        return endereco
    }

 }

 export function avancar() {
    const ehUltimaPosicao = posicaoAtual === lista.length - 1
    if(!ehUltimaPosicao){
        posicaoAtual = posicaoAtual + 1
        sessionStorage.setItem('posicaoHistorico', posicaoAtual)
        const endereco = lista[posicaoAtual]
        return endereco
    }
 }