function getRegionSize(matrix,row,column){
    if(row>=matrix.length || column>=matrix[0].length || row<0 || column<0 )
        return  0
  if(matrix[row][column]==0)return 0      
  let size=1
  matrix[row][column]=0
  for(let r=row-1;r<=row+1;r++){
      for(let c=column-1;c<=column+1;c++){
          if(r==row &&column==c)continue
          size +=getRegionSize(matrix,r,c)
      }
  }      
  return size
}
function connectedCell(matrix) {
    // Write your code here
    let maxResult=0
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==1){
                let size=getRegionSize(matrix,i,j)
                maxResult=Math.max(size,maxResult)
            }
        }
    }
    return maxResult
}

let mat=[[1, 1, 0, 0],[0 ,1 ,1 ,0],[0 ,0 ,1 ,0],[1, 0 ,0 ,0]]
console.log(connectedCell(mat))