export function CakeEnderecoInvalidoError() {
    return {
        __proto__: CakeEnderecoInvalidoError.prototype
    }
}

/* ## OPCIONAL ## */
export function NEWCakeEnderecoInvalidoError() {
    // Só se chamar com new
    // const this = {
    //     __proto__: CakeEnderecoInvalidoError.prototype
    // }

    if(
        !(this instanceof NEWCakeEnderecoInvalidoError)
    ){
        throw new Error('Chamou sem new')
    }    

    // return this
}
