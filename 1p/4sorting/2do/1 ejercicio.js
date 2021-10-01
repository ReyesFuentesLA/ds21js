// 1.- Bubblesort

var lista = [];
    var n, i, k, aux;
   
    var comparaciones=0
function gen(){
return Math.floor(Math.random()*(100-1)+1);
}
for (var i=0;i<100;i++){
lista.push(gen())
}
     n = lista.length;
    console.log(lista); 
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                comparaciones +=1 
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }

    console.log(lista);
   console.time("Tiempo de ejecucion: ")
console.timeEnd("Tiempo de ejecucion: ")
console.log("Pasos: "+comparaciones)