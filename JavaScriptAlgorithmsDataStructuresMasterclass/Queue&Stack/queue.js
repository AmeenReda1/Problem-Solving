class Node{
    constructor(val){
        this.value = value
        this.next = null
    }
}
class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size;
    }
    enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
            
        }
        else{
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size;

    }
    dequeue(){
        // remove From begining
        if(!this.first) return null;
        var temp = this.first
        if(this.first == this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }

}