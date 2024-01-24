function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function insert(root, data) {
    if(root == null){
        root = new Node(data);
    }
    else if(data <= root.data){
        root.left = insert(root.left, data);
    }
    else{
        root.right = insert(root.right, data);
    }
    return root;
}

//SOLUTION
function preOrder(root) {
    if(root) {
        process.stdout.write(root.data + ' ')
        preOrder(root.left)
        preOrder(root.right)
    }
}

// the Main Function to Call in your code
function processData(input) {
    //Enter your code here
    var lines = input.split("\n")[1].split(' ');
    var root = null;
    for(var i = 0; i < lines.length; i++){
        var data = parseInt(lines[i]);
        root = insert(root, data);
    }
    preOrder(root);
}