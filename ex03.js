function  separarParesImpares(array) {
    const resultado = {
        pares: [],
        impares: []
    }

    for (let num of array) {
        if (num % 2 == 0) {
            resultado.pares.push(num)
        } else {
            resultado.impares.push(num)
        }
    }

    return resultado
}

const array = [1, 1, 2, 3, 3 , 3, 4, 5, 6, 7, 8, 8, 8, 8, 9, 10]
console.log(separarParesImpares(array))