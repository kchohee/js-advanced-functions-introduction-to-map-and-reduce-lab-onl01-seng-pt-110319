// Your code here
function mapToNegativize(array){
    let newArr = []
    for ( let i = 0; i < array.length; i++ ){
        newArr.push(array[i] * -1)
    }
    return newArr
}
function mapToNoChange(array){
    let newArr =[]
    for ( let i =0; i< array.length;i++){
        newArr.push(array[i])
    }
    return newArr
}
function mapToDouble(array){
    let newArr = []
    for( let i =0; i < array.length; i++){
        newArr.push(array[i]*2)
    }
    return newArr
}
function mapToSquare(array){
    let newArr = []
    for (let i = 0; i< array.length; i++){
        newArr.push(array[i]**2)
    }
    return newArr
}


function reduceToTotal(array,start = 0){
    let total = start
    array.forEach(num =>{
        total += num
    })
    return total
}

function reduceToAllTrue(array){
    for ( let i = 0; i < array.length; i++ ){
        if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array){
   for ( let i = 0; i < array.length; i++){
       if (array[i]) return true
   }
   return false
}



let q = [1,2,3,4]