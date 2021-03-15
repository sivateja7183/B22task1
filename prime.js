var newArray = [1,2,3,4,5,6,7,8,9]
var primearray = newArray.filter(num=>{for(let i =2; i< num;i++){
    if(num%i===0) return false
} return num!== 1});

console.log(primearray)

// << [2,3,5,7]
