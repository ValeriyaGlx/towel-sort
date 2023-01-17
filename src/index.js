
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (matrix == [] || matrix == undefined) return [];

    const newArr = [];
    const result = []
    
    for(let i = 0; i<matrix.length; i++){
    
    if(i%2 === 0){  
        newArr.push(matrix[i])
    }
    
    if(i%2 !== 0){
        newArr.push(matrix[i].reverse())
    }
    
    
    
    for(let j=0; j<newArr[i].length; j++){
        result.push(newArr[i][j])
    }
    }
    
    return result;
}

