class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length==0
        
    }
    printStack(){
        let str=""
        for(let i=0;i<this.items.length;i++){
            str+=this.items[i]+ " "

        }
        return str
    }
    size(){
        return this.items.length
    }
}
let stack=new Stack()
console.log(stack.isEmpty)
stack.push(4)
stack.push(5)
console.log(stack.printStack())