const missingNumberInArray = (n) => {
    let i=1;
    const sum_elements = sum(n);
    console.log(sum_elements);
    const len = n.length + 1;
    console.log(len);
    const actualSum = (len * (len + 1)) / 2;
    console.log(actualSum);
    return actualSum - sum_elements;
}

function sum(arr){
    let result = 0;

    for(let i=0 ; i < arr.length ; i++){
        result += arr[i];
    }
    return result;
}

const arr = [1,3,4,5,6,7]
const arr1 = [1,2,4,5,6,7]

console.log(missingNumberInArray(arr1));