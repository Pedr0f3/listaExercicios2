function ehPalindromo(string) {
    
    const limpa= string.replace(/\s+/g, '').toLowerCase();

    const inverte = limpa.split('').reverse().join('');

    return limpa === inverte;
}

const resultado = ehPalindromo("pedro")
console.log(resultado ? 'É palíndromo' : 'Não é palindromo')