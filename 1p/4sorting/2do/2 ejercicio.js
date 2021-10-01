// 2.- Selectionsort

var lista=[];
var comparaciones=0
function gen(){
return Math.floor(Math.random()*(100-1)+1);
}
for (var i=0;i<100;i++){
lista.push(gen())
}
console.log(lista);
for (var i=0;i<lista.length;i++){
     a=lista[i]
      p=i
    for(var j=i+1;j<lista.length;j++){
        
        if(lista[j]<a){
           a=lista[j]
             p=j 
             comparaciones +=1 
              }
        }
          lista[p]=lista[i]
          lista[i]=a
  

}
 console.log(lista);
console.time("Tiempo de ejecucion: ")
console.timeEnd("Tiempo de ejecucion: ")
console.log("Pasos: "+ comparaciones)