export function formataEndereco(endereco) {
    if(
        endereco.substring(0, 7) !== 'http://' &&
        endereco.substring(0, 8) !== 'https://'
    ) {
        endereco = 'http://' + endereco
    }

    return endereco
}