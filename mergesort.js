function split(wholeArray) {
    /* your code here to define the firstHalf and secondHalf arrays */
    let halfSize = Math.ceil(wholeArray.length / 2);
    let firstHalf = wholeArray.slice(0, halfSize);
    let secondHalf = wholeArray.slice(halfSize);
    return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
    return arr1.concat(arr2);
}

function mergeSort(array) {
    let result = [];

    let i = 0;
    let j = 0;
    let lowerVal;
    let [firstHalf, secondHalf] = split(array);

    if (secondHalf === []) {
        result = merge(result, firstHalf);
    } else if (firstHalf[0] <= secondHalf[0]) {
        result.push(firstHalf.splice(0, 1));
        result.concat(mergeSort(merge(firstHalf, secondHalf)));
    } else {
        result.push(secondHalf.splice(0, 1));
        result.concat(mergeSort(merge(firstHalf, secondHalf)));
    }

    // while (i < firstHalf.length && j < secondHalf.length) { //for now
    //     // console.log(firstHalf, secondHalf)
    //     if (firstHalf[i] <= secondHalf[j]) {
    //         lowerVal = firstHalf[i];
    //         result.push(lowerVal);
    //         i++
    //     } else {
    //         lowerVal = secondHalf[j];
    //         result.push(lowerVal);
    //         j++
    //     }
    //     // break;
    // }

    return result;
}

console.log(mergeSort([2, 2, 2, 1, 1, 1]));