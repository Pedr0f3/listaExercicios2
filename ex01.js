function contarOcorrencias(array) {
  const contagem = {};
  
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    contagem[num] = (contagem[num] || 0) + 1;
  }
  return contagem;
}

const array = [1, 1, 2, 3, 3 , 3, 4, 5, 6, 7, 8, 8, 8, 8, 9, 10]

console.log(contarOcorrencias(array))