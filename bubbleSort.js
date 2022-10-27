class BubbleSort {
  sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          this.swap(arr, i, j);
        }
      }
    }
    return arr;
  };

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

//test cases
const arrayOne = [1, 3, 2, 5, 8, 5, 12, 6, 5];
const arrayTwo = [12, 3, 45, 78, 9, 34, 64, 12, 46];
const arrayThree = [2, 6, 2, 1, 5, 7, 34, 234, 67, 23, 8];

const bubbleSort = new BubbleSort();

console.log(bubbleSort.sort(arrayThree));
