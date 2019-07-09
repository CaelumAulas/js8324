const aceitouTermos = localStorage.getItem("aceitouTermos")

if(aceitouTermos === null) {
    const nome = prompt("Qual o seu nome?")
    
        const aceitou = confirm(`
            Olá ${ nome }!
            Antes de usar o Cake, precisamos que
            você aceite nossos termos de uso:

                • Você aceita que este software foi
                    feito por pessoas que participaram
                    do curso de JavaScript.
                • Você aceita que o código dessas
                    pessoas pode acessar tudo o que
                    você digitar aqui.
                • Você aceita que tudo aqui está
                    em desenvolvimento e por isso não
                    recomendamos que você troque de 
                    navegador agora
        `)
    
        if (!aceitou) {
            alert(nome + ', não podemos seguir juntos')
            window.close()
        } else {
            localStorage.setItem("aceitouTermos", true)
        }
}
