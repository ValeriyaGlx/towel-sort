
// You should implement your task here.

module.exports = function towelSort (matrix) {

if (matrix == [] || matrix == undefined) return [];

const newArr = [];

for(let i = 0; i<matrix.length; i++){

if(i%2 === 0){  
    newArr.push(matrix[i])
}

if(i%2 !== 0){
    newArr.push(matrix[i].reverse())
}

for(let j=0; j<matrix[i].length; j++){
    
}
}


return newArr.join(',')
}

