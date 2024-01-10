let s=''
function preutils(root){
    if(root==null)return
    s+=root.data+' '
    preutils(root.left)
    preutils(root.right)
}
function preOrder(root) {
	preutils(root)
    console.log(s)
}