import { carregar } from "/scripts/navegacao/carregar.js"
import { Endereco } from "/scripts/endereco/Endereco.js"


class Favorito extends Endereco{
    constructor(nome, endereco){   
        super(endereco)
        /* 
        

        const that = this
        this.onclick = function(){
            // this dinâmico
            carregar(that)
        }
        
        // Arrow function
        // this léxico
        this.onclick = () => {
            carregar(this)
        }
        */


        this.onclick = this.onclick.bind(this)

        this.nome = nome || this.urlResumida
        this.descricao = this.urlCompleta
        
    }

    // Inútil
    onclick () { 
        const endereco = this
        carregar(endereco)
    }
}

$botaoFavoritos.addEventListener('click', function () {
    const nome = prompt(
        'Qual o nome do favorito'
    )
    const favorito = new Favorito(
        nome,
        $janelaPrincipal.contentWindow.location.href
    )

    $Cake.addFavorite(favorito)
})
