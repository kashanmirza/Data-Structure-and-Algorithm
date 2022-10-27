class InsertionSort {
    sort = (arr) => {
      for (let i = 1; i < arr.length; i++) {
        var current = arr[i];
        var j = i - 1;
        while(j>0 && arr[j] > current){
          arr[j+1] = arr[j];
          j--;
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
  
  const insertionSort = new InsertionSort();
  
  console.log(insertionSort.sort(arrayThree));
  