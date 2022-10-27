const howSum = (target, values) => {
    if(target === 0) return true;


    for(var i=0 ; i < values.length; i++){
        if(target % val === 0){

        } 
        if(howSum(reminder, values) === true) {
            memo[target] = true;
            return memo[target];
        }
    }
}

console.log(howSum(7,[2,3,4,1])) 
console.log(howSum(8,[2,3,4,7]))
console.log(howSum(9,[2,3,4,7]))
console.log(howSum(30,[14,7]))