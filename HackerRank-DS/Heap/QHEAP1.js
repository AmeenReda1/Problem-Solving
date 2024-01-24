class MinHeap{
    constructor(){
        this.size=0
        this.storage=[]
    }
    getLeftChildIndex(index){
        return 2*index+1
    }
    getRightChildIndex(index){
        return 2*index+2
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.size;
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.size;
    }
    hasParent(index){
        return this.getParentIndex(index)>=0
    }
    leftChild(index){
        return this.storage[this.getLeftChildIndex(index)]
    }
    rightChild(index){
        return this.storage[this.getRightChildIndex(index)]
    }
    parent(index){
    return this.storage[this.getParentIndex(index)]
    }
    isFull(){
        return this.size==this.capacity;
    }
    swap(index1,index2){
        let temp=this.storage[index1]
        this.storage[index1]=this.storage[index2]
        this.storage[index2]=temp
    }
    removeMin(){
        if(this.size==0)
            return new Error('Empty Heap');
        let data =this.storage[0]
        this.storage[0]=this.storage[this.size-1];
        this.size -=1
        this.heapifyDown(0)
        return data
    }
    heapifyDown(index){
        let smallest=index
        if(this.hasLeftChild(index)&& this.storage[smallest]>this.leftChild(index))
            smallest=this.getLeftChildIndex(index)
        if(this.hasRightChild(index)&& this.storage[smallest]>this.rightChild(index))
            smallest=this.getRightChildIndex(index)
        if(smallest !=index){
            this.swap(smallest,index)
            this.heapifyDown(smallest)
        }
    }
    insert(data){
        this.storage[this.size]=data
        this.size+=1
        this.heapifyUp(this.size-1)
    }
    heapifyUp(index){
        if(this.hasParent(index) && this.parent(index)>this.storage[index]){
            this.swap(this.getParentIndex,index)
            this.heapifyUp(this.getParentIndex(index))
        }
    }

}


function processData(input) {
    let newHeap = new MinHeap();
    let arrInput = input.split('\n');
    let map={}
    for (let i = 1; i <= parseInt(arrInput[0]); i++) {
        let [query, value] = arrInput[i].split(' ');
        value=parseInt(value)
        if (query === '3'){
            while(map[newHeap.storage[0]]<1){
                newHeap.removeMin();
            }
            console.log(newHeap.storage[0])
        }
           
        else if (query === '1'){
            newHeap.insert(value);
            if(map.hasOwnProperty(value)){
                map[value]++
            }
            else{
                map[value]=1
            }
        }
            
        else if (query === '2'){
        if(newHeap.storage[0]==value){
            newHeap.removeMin();
            
        }
        else map[value]--;
        }
    }
}