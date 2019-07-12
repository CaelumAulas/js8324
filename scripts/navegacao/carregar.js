import { Endereco } from "/scripts/endereco/Endereco.js"

function carregar(seiLah) {
    let endereco
    if(typeof seiLah === "string") {
        endereco = new Endereco(seiLah)
    } else if(seiLah instanceof Endereco) {
        endereco = seiLah
    } else {
        throw new Error("Deu ruim")
    }

    $inputEndereco.value = endereco.urlCompleta
    $janelaPrincipal.src = endereco.urlCompleta
}

export { carregar }
