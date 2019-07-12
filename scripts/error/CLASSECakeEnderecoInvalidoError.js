export class CakeEnderecoInvalidoError extends Error {
    constructor(endereco) {
        super()
        this.endereco = endereco
        Object.freeze(this)
    }

    toString() {
        return `Endereço inválido: ${this.endereco}\n\n${this.stack}`
    }
}

Object.freeze(CakeEnderecoInvalidoError.prototype)