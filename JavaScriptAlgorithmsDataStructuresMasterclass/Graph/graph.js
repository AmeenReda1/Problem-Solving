class Graph{
    constructor(){
        this.adjacencyList={};
    }
    addVertex(vertex){
        // vertex means node
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[]
    }
    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(vertex1, vertex2) {  
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(ele => ele !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(ele => ele !== vertex1);
    }
    
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjecancyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjecancyVertex)
        }
    }
    depthFirstRecursive(start){
        // 
        const result=[];
        const visited={};
        // semicolon here is very important because if you don't add (;) in the end od this.adjacencyList it js will found it = this.adjaacentyList(function)
        const adjacencyList=this.adjacencyList;
        
        (function dfs(vertex){
            if(!adjacencyList.hasOwnProperty(vertex)) return null
            visited[vertex]=true
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
                
            });

        })(start);
        return result;
    }
    depthFirstIterative(start){
        const visited={}
        const result=[]
        const stack=[start]
        let currentVertex
        visited[start]=true
        while(stack.length){
            currentVertex=stack.pop()
            result.push(currentVertex)
            if(visited[currentVertex]){
                this.adjacencyList[currentVertex].forEach(neighbor=>{
                    if(!visited[neighbor]){
                        visited[neighbor]=true
                        stack.push(neighbor)
                    }
                })
                visited[currentVertex]=true

            }
        }
        return result
    }
    bredthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start]=true
        let curentVertex
        while(queue.length){
            curentVertex = queue.shift()
            result.push(curentVertex)
            this.adjacencyList[curentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    queue.push(neighbor)
                }
            })
        }
        return result

    }
}
let g= new Graph()
g.addVertex("Dalles")
g.addVertex("Tokyo")
g.addVertex("Aspen")
g.addVertex("Tok1")
g.addVertex("Asp1")


g.addEdge("Dalles","Tokyo")
g.addEdge("Dalles","Aspen")
g.addEdge("Tokyo","Tok1")
g.addEdge("Aspen","Asp1")
console.log(g.adjacencyList) 


console.log(g.depthFirstRecursive("Dalles"))
console.log(g.depthFirstIterative("Dalles"))
console.log(g.bredthFirst("Dalles"))
