function pivot(arr, start = 0, end = arr.length+1) {
    let pivot = arr[start];
    let swapIdx = start;
    function swap(array, i, j) {
        [array[i], array[j]] = [array[j], array[i]];
    }

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

/**
 * pivot([4,8,2,1,5,7,6,3]) -> return 3
 * 진행 과정
 * [4,2,8,1,5,7,6,3]
 * [4,2,1,8,5,7,6,3]
 * [4,2,1,3,5,7,6,8]
 * [3,2,1,4,5,7,6,8]
 */


function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivotIndex = pivot(arr, left, right); // 3
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

/**
 * quickSort([4,6,9,1,2,5,3])
 * [4,6,9,1,2,5,3]
 * [3,2,1,4,6,9,5]
 *        4
 *  3,2,1   6,9,5
 *      3     6
 *  2,1     5   9
 *    2
 *  1
 */