function ordenarPorIdade(pessoas) {
    pessoas.sort((a, b) => a.idade - b.idade)
    
    return pessoas
}

const pessoas = [
    {nome: "Pedro", idade: 10 },
    {nome: "Paulo", idade: 19 },
    {nome: "João", idade: 36 },
    {nome: "Lukas", idade: 18 },
    {nome: "Taty", idade: 22 },
    {nome: "Ana", idade: 30 }
]

console.log(ordenarPorIdade(pessoas))