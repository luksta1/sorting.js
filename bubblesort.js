var swap = function(array, in1, in2) {
    var temp = array[in1];
    array[in1] = array[in2];
    array[in2] = temp;
}

function bubbleSort(array) {
    while (true) {
        var flag = true;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                flag = false;
            }
        }
        if (flag === true) {
            break;
        }
    }
    return array;
}