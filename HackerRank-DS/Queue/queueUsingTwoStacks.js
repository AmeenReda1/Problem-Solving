function processData(input) {
    //Enter your code here
    input=input.split("\n").slice(1)
    let stackOne=[]
    let stackTwo=[]
    for(let operation of input){
        operation=operation.split(" ")
        switch(operation[0]){
        case '3':
        if(stackOne.length>0)
            console.log(stackOne[stackOne.length-1])
        else{
            while(stackTwo.length>0){
                    stackOne.push(stackTwo.pop())
                }
            console.log(stackOne[stackOne.length-1])    
        }    
        break;
        case '2':
            if(stackOne.length>0){
                stackOne.pop()
            }
            else{
                while(stackTwo.length>0){
                    stackOne.push(stackTwo.pop())
                }
                stackOne.pop()
            }
            break;
        case'1':
            
            stackTwo.push(operation[1])
            
            break;
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
