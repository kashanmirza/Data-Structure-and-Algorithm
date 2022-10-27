const canSum =(target,values, memo={})=> {
    if(target in memo ) return memo[target];
    if(target === 0 ) return true;
    if(target < 0 ) return false;


    for(const val of values){
        let reminder = target - val; 
        if(canSum(reminder, values) === true) {
            memo[target] = true;
            return memo[target];
        }
    }
    memo[target] = false
    return memo[target];
}

// 5 , 4, 3, 0
console.log(canSum(7,[2,3,4,1])) // 5,4,3,6 => 3,2,1,-5 => 1,0,1,-2 | 
console.log(canSum(8,[2,3,4,7]))
console.log(canSum(9,[2,3,4,7]))
console.log(canSum(30,[14,7]))