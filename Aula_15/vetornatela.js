let valores = [2,5,4,6,8,1]
valores.sort()
var pos = 0
/*
for(pos; pos < valores.length ; pos++){
    console.log(`A posição ${pos} tem como valor ${valores[pos]}`)
}*/
for(pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
