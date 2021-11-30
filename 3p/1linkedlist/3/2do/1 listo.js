console.time("Tiempo de ejecucion: ")

class nodo{

constructor(dato,siguiente){

this.dato=dato

this.siguiente=siguiente

}

}

class listaenlace{

constructor(){

this.cabeza=null;

this.size=0;

}

agregar(dato){

const nuevoNodo = new nodo(dato,null)

if(!this.cabeza){

this.cabeza= nuevoNodo

}else{

let current=this.cabeza

while(current.siguiente){

current=current.siguiente

}

current.siguiente=nuevoNodo

}

this.size++

}

agregarEn(dato,indice){

if(indice<0 || indice>this.size){

return null

}

const nuevoNodo = new Nodo(dato)

let current=this.cabeza

let previous

if(indice===0){

nuevoNodo.siguiente=current

this.cabeza=nuevoNodo

}else{

for(let i=0;i<indice; i++){

previous=current

current=current.siguiente

}

nuevoNodo.siguiente=current

previous.siguiente=nuevoNodo

}

this.size++

}

imprimir(){

if(!this.size){

return null

}

let current = this.cabeza

let result = ''

while(current){

result+=current.dato+='->'

current= current.siguiente

}

result+='X'

return result

}

remover(dato){

let current=this.cabeza

let previous=null

while(current!=null){

if(current.dato===dato) {

if(!previous){

this.cabeza=current.siguiente

}else{ previous.siguiente=current.siguiente}

this.else--

return current.dato

}

previous=current

current=current.siguiente

}

return null;

}

}

const lista = new listaenlace();

function gen(){

return Math.floor(Math.random()*(10000-1)+1);

}

for (var i=0;i<10000;i++){

lista.agregar(gen())

}

console.timeEnd("Tiempo de ejecucion: ")

console.log(lista.imprimir())