function multiplicarMatrizes(matrizA, matrizB) {
    const resultado = Array.from({ length: matrizA.length }, () => Array(matrizB[0].length).fill(0));
    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizB[0].length; j++) {
            for (let k = 0; k < matrizA[0].length; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    return resultado;
}

const matrizA = [
    [1, 2],
    [3, 4]
];

const matrizB = [
    [5, 6],
    [7, 8]
];

const resultado = multiplicarMatrizes(matrizA, matrizB);
console.log(resultado);