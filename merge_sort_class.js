class MergeSort {
  constructor(array, count = 0) {
    this.array = array;
    this.count = count;
  }

  sort(array) {
    if (array.length <= 1) {
      return array
    } else {
      const middle = Math.floor(array.length / 2);
      const arrayLeft = array.slice(0, middle);
      const arrayRight = array.slice(middle, array.length);
      const sortedLeft = this.sort(arrayLeft);
      const sortedRight = this.sort(arrayRight);
      return this.mergeArrays(sortedLeft, sortedRight);
    }
  }

  mergeArrays(arr1, arr2) {
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

  call() {
    console.log(`Merge sort: ${this.count} comparisons - [${this.sort(this.array)}]`);
    return this.sort(this.array);
  }

}

const list = [48, -2, 6, 12, 0, -4];
a = new MergeSort (list);
console.log(a.call());