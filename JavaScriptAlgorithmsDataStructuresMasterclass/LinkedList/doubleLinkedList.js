class Node{
    constructor(val){
        this.val=val
        this.next=null
        this.prev=null
    }
}
class DoubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0;

    }
    push(val){
        let newNode = new Node(val)
        if(this.length==0){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
       if(!this.head) return undefined;
       var poppedNode = this.tail
       if(this.length==1){
        this.head = null
        this.tail = null
       }
       else {
        this.tail = poppedNode.prev;
        this.tail.next = null
        poppedNode.prev = null 
       }
       this.length--;
       return poppedNode
    } 
    shift(){
        if(this.length==0)return undefined
        let oldHead = this.head
        if(this.length==1){
            this.head = null
            this.tail = null
        }
        this.head = oldHead.next
        oldHead.next = null
        this.length--
        return oldHead 
    }
    unshift(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.head.prev = newNode
            newNode.next = this.head
            newNode.prev = null
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        if(index<0 || index>=this.length)return null
        if(index<=(this.length-1)/2){
            let current = 0
            let currentNode = this.head  
            while(currentNode){
                if(current == index)return currentNode
                currentNode = currentNode.next   
                current++ 
            }
        }
        else{
            let current = this.length-1
            let currentNode = this.tail  
            while(currentNode){
                if(current == index)return currentNode
                currentNode = currentNode.prev   
                current--
            }
        }
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val=val
            return true
        }
    }
    insert(index,val){
        
        if(index<0 ||index> this.length)return false  

        if(index==0)return this.unshift(val)  
        
        else if(index==this.length) return this.push(val)
        
        let newNode = new Node(val)
        var beforeNode = this.get( index- 1 )
        var afterNode = beforeNode.next 
        
        beforeNode.next = newNode , newNode.prev = beforeNode 
        newNode.next = afterNode , afterNode.prev = newNode             
        
        this.length++;
         return true        
    }
    remove(index){

        if(index<0 ||index>= this.length)return false  
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()
        var removeNode = this.get(index)
        var beforeNode = removeNode.prev
        var afterNode = removeNode.next
        beforeNode.next = afterNode
        afterNode.prev = beforeNode
        removeNode.next = null
        removeNode.prev = null 
        this.length--
        return removeNode;

    }

}
let list = new DoubleLinkedList()
list.push(1)
list.push(2)
list.push(3)

