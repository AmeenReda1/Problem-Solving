let s=''
function postutils(root){
    if(root==null)return
    
    postutils(root.left)
    postutils(root.right)
    s+=root.data+' '
}
function postOrder(root) {
    postutils(root)
    console.log(s)
}
