class SelectionSort {
    sort = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        var min = i;
        for(var j=i ; j<arr.length ; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        this.swap(arr, i, min);
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
  
  const selectionSort = new SelectionSort();
  
  console.log(selectionSort.sort(arrayOne));
  