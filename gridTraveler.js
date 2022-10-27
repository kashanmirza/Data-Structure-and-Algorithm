
const start = performance.now();
const gridTraveler = (row,col, memo={}) => {
    const key = row + ',' + col;
    if(key in memo) return memo[key];
    if(row === 1 && col === 1) return 1;
    if(row === 0 || col === 0) return 0;

    memo[key]  = gridTraveler(row-1,col,memo) + gridTraveler(row,col-1,memo);

    return memo[key];
}

console.log(gridTraveler(6,6))

const end = performance.now();

// console.log(gridTraveler(2,3))
// console.log(gridTraveler(3,2))
// console.log(gridTraveler(1,3))
console.log(end - start)
