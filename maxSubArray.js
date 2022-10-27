const maxSubArray = (arr) => {
    let maxSum = arr[0];
    let curSum = 0

    for(var i=0 ; i<arr.length ; i++){
        if(curSum < 0){
            curSum = 0;
        }
        curSum += arr[i];
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}

const arr1 = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(arr1));