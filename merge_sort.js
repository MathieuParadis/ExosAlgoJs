const _mergeArrays = (arr1, arr2) => {
    const mergeArray = [];
  
    while (arr1.length && arr2.length) {
      mergeArray.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift());
    }
  
    //if we still have values, let's add them at the end of `mergeArray`
    while (arr1.length) {
      mergeArray.push(arr1.shift());
    }
    while (arr2.length) {
      mergeArray.push(arr2.shift());
    }
  
    return mergeArray
  }
  
  const mergeSort = (array) => {
    if (array.length <= 1) {
      return array
    } else {
      const middle = Math.floor(array.length / 2);
      const arrayLeft = array.slice(0, middle);
      const arrayRight = array.slice(middle, array.length);
      const sortedLeft = mergeSort(arrayLeft);
      const sortedRight = mergeSort(arrayRight);
      return _mergeArrays(sortedLeft, sortedRight);
    }
  }

const list = [48, -2, 6, 12, 0, -4];
console.log(mergeSort(list));

