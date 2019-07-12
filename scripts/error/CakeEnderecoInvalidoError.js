export function DEVERDADECakeEnderecoInvalidoError(endereco) {
    const erro = new Error()

    return Object.freeze({
        stack: erro.stack,
        endereco: endereco,
        __proto__: CakeEnderecoInvalidoError.prototype
    })
}

DEVERDADECakeEnderecoInvalidoError.prototype.toString = function() {
    return `Endereço inválido: ${this.endereco}\n\n${this.stack}`
}
DEVERDADECakeEnderecoInvalidoError.prototype.__proto__ = Error.prototype

Object.freeze(DEVERDADECakeEnderecoInvalidoError.prototype)


/* ## OPCIONAL ## */
export function NEWCakeEnderecoInvalidoError(endereco) {
    // Só se chamar com new
    // const this = {
    //     __proto__: CakeEnderecoInvalidoError.prototype
    // }

    if(
        !(this instanceof NEWCakeEnderecoInvalidoError)
    ){
        throw new Error('Chamou sem new')
    }    

    const erro = new Error()

    this.stack = erro.stack
    this.endereco = endereco

    Object.freeze(this)

    // Object.defineProperty(this, 'ninguemMexe', {
    //     writable: false,
    //     configurable: false,
    //     value: "oi"
    // })

    // return this
}

NEWCakeEnderecoInvalidoError.prototype.toString = function() {
    return `Endereço inválido: ${this.endereco}\n\n${this.stack}`
}
NEWCakeEnderecoInvalidoError.prototype.__proto__ = Error.prototype

Object.freeze(NEWCakeEnderecoInvalidoError.prototype)


// Função factory
// Closures
export function HUMILDECakeEnderecoInvalidoError(endereco) {
    // Privado
    // Enpasulado
    const erro = new Error()

    // Público
    return Object.freeze({
        toString: function() {
            `Endereço inválido: ${endereco}\n\n${erro.stack}`
        }
    })
}
