function pila()
{
    this.DataOfStore=[]
    this.top=0
    this.push=push
    this.pop=pop
    this.peek=peek
    this.clear=clear
    this.length=length
}
function push(element) //Ingresar nuevo elemento
{
    this.DataOfStore[this.top++]=element
}
function peek() //Regresar el ultimo ingresado
{
    return this.DataOfStore[this.top-1]
}
function pop() //Quita de la pila el ultimo ingresado
{
    return this.DataOfStore[--this.top]
}
function clear() //elimina la pila
{
    this.top=0
}
function length() //Longitud de la pila
{
    return this.top
}
var nuevaPila= new pila()