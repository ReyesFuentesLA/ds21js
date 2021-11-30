class Node {
        constructor (value) {
        this.value = value
        this.right = null
        this.left = null
        }
    }
    
    class Tree {
        constructor () {
        this.root = null
        }
    
        isEmpty () {
        return this.root === null
        }
    
        add (value) {
       
        if (this.isEmpty()) {
            this.root = new Node(value)
            return
        }
    
        var aux = this.root
    
        while (aux) {
            // vamos hacia la izquierda
            if (value < aux.value) {
            if (aux.left) {
                aux = aux.left
            } else {
                aux.left = new Node(value)
                return
            }
            } else { // vamos hacia la derecha
            if (aux.right) {
                aux = aux.right
            } else {
                aux.right = new Node(value)
                return
            }
            }
        }
        }
    
        
        print (node = this.root) {
        if (!node) {
            return
        }
        this.print(node.left)
        console.log(node.value)
        this.print(node.right)
        }
        
        inOrder (node = this.root) {
        if (!node) {
            return
        }
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
        }
        
        preOrder (node = this.root) {
        if (!node) {
            return
        }
        console.log(node.value)
        this.preOrder(node.left)
        this.preOrder(node.right)
        }
        
        postOrder (node = this.root) {
        if (!node) {
            return
        }
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value)
        }
    }

var a = new Tree();

function gen(){
  return Math.floor(Math.random()*(10-1)+1)
}


for(var i=0;i<10;i++){
   a.add(gen())
}

console.log("In order")
a.inOrder()
console.log("Pre Order")
a.preOrder()
console.log("Post Order")
a.postOrder()