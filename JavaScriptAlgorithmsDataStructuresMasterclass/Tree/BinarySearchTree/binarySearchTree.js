class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {

    constructor() {
        this.root = null
       
    }
    insert(value) {
        var newNode = new Node(value)  
        if (this.root === null) {
            this.root = newNode
            return this;
        }
        var current = this.root
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this;
                }
                current = current.left
            }
            else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right
            }
        }
    }
    find(value){
        let current= this.root
        if(current==null)return false
        let found = false
        while(current && !found){
            if(value<current.value){
                current = current.left
            }
            else if(value>current.value){
                current = current.right
            }else{
                return current
            }  
        }
        return null
    }
    BFS(){
        var node = this.root,
            queue = [],
            visited = [];
            queue.push(node)
            while(queue.length){
                node = queue.shift();
                visited.push(node)
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
        return visited
    }
    DFSPreOrder(){
        // Visit The Node Then Go to visit all in the left then all of the right
        var data = [];
        var current = this.root
        function traverse(node){ 
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }
    DFSPostOrder(){ 
    // visit all in the left then all of the right then Visit The Node
    var data = [];
    var current = this.root
    function traverse(node){
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
        data.push(node.value)
    }
    traverse(current)
    return data
    }
    DFSInOrder(){
        // visit all in the left then Visit The Node then all of the right 
        var data = [];
        var current = this.root
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
            
        }
        traverse(current)
        return data
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15) 
tree.root.left = new Node(7)
 