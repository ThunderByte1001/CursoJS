let num = [1,2,3]
num[3]=4
num.push(7)
console.log(num)
console.log(`O nosso vetor é o [${num}] tem ${num.length} posições e a ordem crescente do mesmo é [${num.sort()}]`)
console.log(`O primeiro valor deste vetor é o ${num[0]}`)
let pos = num.indexOf(3)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
        console.log(`O valor está na posição ${pos}`)
    }
