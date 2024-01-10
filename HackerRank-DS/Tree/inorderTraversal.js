let s=''
function inOrderUtil(root){
    if(root==null)
        return 
    inOrderUtil(root.left)
    s+=root.data+' '
    inOrderUtil(root.right) 
}
function inOrder(root) {
      inOrderUtil(root)
      console.log(s)
}