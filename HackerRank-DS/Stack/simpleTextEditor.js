let undoS=[]
let s=""
function processData(input) {
    //Enter your code here
     const allInput = input.split("\n").slice(1);
    for(let ops of allInput){
        let arrOps=ops.split(' ')
        if(arrOps[0]=='4' &&undoS.length>0){
            s=undoS.pop()
            continue
        }
        if(arrOps[0]=='3'){
            //  3 -->print operation 
            let index=arrOps[1]
            console.log(s[index-1])
            
        }
        else if(arrOps[0]=='1'){
            undoS.push(s)
            s+=arrOps[1]
        }
        else if(arrOps[0]=='2'){
            undoS.push(s)
            s=s.slice(0,-parseInt(arrOps[1]))
        }
    }  
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
