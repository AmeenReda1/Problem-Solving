
function hasCycle(llist) {
    if(llist==null){
        return 0
    }
    let slow=llist
    let fast=llist
    while(fast!==null && fast.next !==null){
            fast=fast.next.next
            slow=slow.next
        
        if(fast==slow){
            return 1
        }
    }
    return 0
}

