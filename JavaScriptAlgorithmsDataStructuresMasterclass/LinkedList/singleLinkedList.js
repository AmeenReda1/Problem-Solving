class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    push(val){
        var newNode=new Node(val)
        if(!this.head){
            this.head=newNode
            this.tail=this.head
        }
        else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++;
        return this
    }
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val)
            current=current.next
        }
    }
    pop(){
        if(!this.head)return undefined
        var current=this.head
        var newTail=current
        while(current.next){
            newTail=current
            current=current.next
        }
        this.tail=newTail
        this.tail.next=null 
        this.length--;
        if(this.length==0){
            this.head=null
            this.tail=null
        }
        return current
    } 
    shift(){
        if(!this.head) return undefined
        var targetHead=this.head
        head=this.targetHead.next
        this.length--
        return targetHead

    }
    unshift(val){
        var newNode=new Node(val)
        newNode.next=this.head
        this.head=newNode
        this.length++;
        return this
    }
    get(index){
        if(this.index < 0 || index >= this.length) return undefined;
         let count=0
         let current=this.head
         while(count !=index){
             current=current.next
             count++
         }
         return current

    }
    set(val,index){
        let foundNode=this.get(index)
        if(foundNode){
            foundNode.val=val
        }
        return this
    }
    insert(val,index){
        let newNode=new Node(val)
        if(index==0)
            this.unshift(val)
        else if(index==this.length)
            this.push(val)
        else if(index>0 && index<this.length){
            let prevIndex=index-1
            let foundNode=this.get(prevIndex)
            if(foundNode){
                newNode.next=foundNode.next
                foundNode.next=newNode
                this.length++    
            }
        }
        else{
            return false
        }
    
    return true
    }
    remove(index){
        if(index < 0 ||index >= this.length) return undefined
        if(index == 0) return this.shift();
        if(index == this.length-1) return this.pop()

        var previuosNode=this.get(index-1)
        var removedNode=previuosNode.next
        previuosNode.next=removedNode.next
        this.length--;
        return removedNode
    }
    reverse(){
        var node  = this.head
        this.head = this.tail
        this.tail = node
        let next;
        let prev = null
        for(let i=0;i<this.length;i++){
            next = node.next
            node.next = prev
            prev = node
            node = next

        }
    }
    print(){
        var arr= []
        var current = this.head
        while(current){
            arr.push(current.val)
            current=current.next
        }
        console.log(arr)
    }

}
var list = new SinglyLinkedList()
list.push("Hello")
list.push("Ameen")
list.push("!")