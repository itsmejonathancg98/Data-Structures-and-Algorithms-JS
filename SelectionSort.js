function selectionSort(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        let min = i;
        for (let j = i + 1; j < inputArr.length; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = temp;

        }

    }
    return inputArr;
}

const inputArr = [2, 4, 1, 10, 5];
const run = selectionSort(inputArr);
console.log(run);