let arr = [8, 7, 3, 4, 1, 5, 2, 6];

const merge = (arr1, arr2) => {
  let result = [];
  let [i, j] = [0, 0]; // [pointerIndexOfArr1, pointerIndexOfArr2]

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

console.log(mergeSort([4, 5, 1, 3, 2]));
