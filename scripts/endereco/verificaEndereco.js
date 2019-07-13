import { CakeEnderecoInvalidoError } from '/scripts/error/CLASSECakeEnderecoInvalidoError.js';

/* export function verificaEndereco(endereco, deuCerto, deuRuim) {
    // Callback Hell
    const xhr = new XMLHttpRequest()
    xhr.open("GET", endereco)
    xhr.send()

    xhr.addEventListener('load', function(evento) {
        try {
            deuCerto()
        } catch(error) {
            deuRuim()
        }
    })

    xhr.addEventListener('error', function(evento) {
        deuRuim(new CakeEnderecoInvalidoError(endereco))
    })
} */

export async function verificaEndereco(endereco) {
    try {
        return await fetch(endereco).then((resposta) => {
            if(resposta.status === 404) {
                throw endereco
            }
        })
    } catch(error) {
        throw new CakeEnderecoInvalidoError(endereco)
    }
}
 