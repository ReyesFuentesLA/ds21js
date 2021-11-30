class Nodo{   
    constructor(data,left=null,right=null){         
        this.data=data         
        this.left=left
        this.right=right     
    } 
}
let array = []
let con=0 , con1=0, con2=0

function agregar(dato){
    
    node=new Nodo(dato)
    
    if(array[con]==undefined){
        array[con]=(node)
    }else{
        con1++
        if(con1==1){
            con2++
            (array[con].left)=(node)
            array[con2]=(node)
        }
        if(con1==2){
            (array[con].right)=(node)
            con2++
            array[con2]=(node)
            con1=0
            con++
        }
    }
}

function gen(){
  return Math.floor(Math.random()*(100-1)+1)
}


for(var i=0;i<5;i++){
   agregar(gen())
}

console.log(array)