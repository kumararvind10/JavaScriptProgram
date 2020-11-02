let arr = [2, 3, 3, 2, 5,5]
let arrCount = [];
let arrFreqCount = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i+1; j < arr.length - i+1; j++) {
            if (arr[i] === arr[j]) {
                count++;
                arr.pop(j);
            }
            
        }
        arrCount.push(count);
    }

    return arrCount;
}



console.log( arrFreqCount(arr));