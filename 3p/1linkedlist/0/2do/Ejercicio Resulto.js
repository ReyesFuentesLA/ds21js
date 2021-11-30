var p = 3,pr = 4, v = 87
var array = new Array()
function gen(){
  return Math.floor(Math.random()*(100-1)+1)
}
for(var i=0;i<100000;i++){
array.push(gen())
}

console.log(array)
insertAt(p,v);
remove(pr);
function insertAt(p,v){
    array.splice(p,0,v)
    console.log(array)
}
function remove(pr){
    array.splice(pr,1)
    console.log(array)
}
