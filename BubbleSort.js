function bubbleSort(inputArr) {
    let n = inputArr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if(inputArr[j] > inputArr[j + 1]){
                let temp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = temp;
            }
        }
    }
    return inputArr
}

const inputArr = [3,5,1,6,7];
const run = bubbleSort(inputArr);
console.log(run);