// encapsulada
export let paginaInicial = localStorage.getItem('paginaInicial')

// função setter
// tem um ambiente privado
// função closure
// Closure
export function salvar(valor){
    paginaInicial = valor
    localStorage.setItem('paginaInicial', valor)
}