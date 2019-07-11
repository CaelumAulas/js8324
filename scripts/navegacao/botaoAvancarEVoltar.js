import { carregar } from "/scripts/navegacao/carregar.js"

import * as historico from '/scripts/historico/historico.js'

$janelaPrincipal.addEventListener('load', function atualizaHistorico() {
    historico.adiciona(
        this.contentWindow.location.href
    )
})

//TODODepois desativar o botao
$botaoVoltar.addEventListener('click', function voltar(){
    const paginaAnterior = historico.voltar()
    if(paginaAnterior) carregar(paginaAnterior)
})

//TODODepois desativar o botao
$botaoAvancar.addEventListener('click', function avancar(){
    const paginaSeguinte = historico.avancar()
    if(paginaSeguinte) carregar(paginaSeguinte)
})