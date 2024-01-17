function levelOrder(root){
    
    let queue=[]
    let ans=''
    queue.push(root)
    while(queue.length>0){
        let currentItem=queue[0]
        ans+=currentItem.data+' '
        queue.shift()
        if(currentItem.left !=null){
            queue.push(currentItem.left)
        }
        if(currentItem.right !==null){
            queue.push(currentItem.right)
        }
        
    
    }
    console.log(ans)
}