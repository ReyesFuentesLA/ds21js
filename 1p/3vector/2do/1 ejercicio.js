//InsertAt

var matriz = [84,525,14,69,71,73,54]
console.log(matriz)
function insert(p,v){
matriz.splice(p,0,v)
}
insert(3,100)
console.log(matriz)