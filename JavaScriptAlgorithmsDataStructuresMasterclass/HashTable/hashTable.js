class HashTable{
    constructor(size=10){
        this.keyMap = new Array(size)

    }
    _hash(key){
        let total = 0;
        let WEIRED_PRIME = 31
        for(let i=0; i< Math.min(key.length,100);i++){
            let char = key[i]
            let value = char.charCodeAt(0) -96
            total = (total * WEIRED_PRIME + value) % this.keyMap.length
        }
        return total;
    }
    set(key,value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index]=[]
        }
        this.keyMap[index].push([key,value])
        return index;
    }
    get(key){
        let index = this._hash(key)
        if(this.keyMap[index].length) {
            let targetArr=this.keyMap[index]
            for(let i=0;i<targetArr.length;i++){
                if(targetArr[i][0]==key) return targetArr[i][1]
            }
        }
        return undefined
        
    }
    keys(){
        let keysArr = [];
        for(let i=0;i<this.keyMap.length;i++){
          if(this.keyMap[i]){
              for(let j=0;j<this.keyMap[i].length;j++){
                  if(!keysArr.includes(this.keyMap[i][j][0]))
                  keysArr.push(this.keyMap[i][j][0])
              }
          }
        }
        return keysArr
  }
    values(){
          let valuesArr = [];
          for(let i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j=0;j<this.keyMap[i].length;j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1]))
                        valuesArr.push(this.keyMap[i][j][1])
                }
            }
          }
          return valuesArr
    }
}
let ht = new HashTable()
ht.set("ameen",1)
ht.set("ameen",2)
ht.set("ameen",3)
ht.set("ali",1)
console.log(ht.values())



