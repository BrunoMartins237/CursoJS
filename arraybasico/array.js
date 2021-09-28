let numeros = [6, 2, 4, 11, 10]
/*console.log(numeros)
console.log(numeros.length)
console.log(numeros.sort())
console.log(numeros.push[11])
numeros[6] = 15
numeros.
*/
/*
numeros.push(7)
for (let posicao = 0; posicao < numeros.length; posicao++){
    console.log(`A posição ${posicao} tem o valor ${numeros[posicao]}`)
}
*/

for (let pos in numeros){
    console.log(`A posição ${pos} tem o valor ${numeros[pos]}`)
}
let posicao = numeros.indexOf(3)
if (posicao == -1){
    console.log(`Valor não encontrado`)
} else {
    console.log(`O valor está na posição ${posicao}`)
}