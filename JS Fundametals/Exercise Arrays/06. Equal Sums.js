function solve(array) {
let leftSum = 0;
let rightSum = 0;
let equal = false;

    for (let currentPosition = 0; currentPosition < array.length; currentPosition++) {
        
        for (let leftSide = currentPosition-1; leftSide >= 0; leftSide--) {
            const left = array[leftSide];
            leftSum += left;
        }
        for (let rightSide = currentPosition+1; rightSide < array.length; rightSide++) {
            const right = array[rightSide];
            rightSum += right;
        }
        if(leftSum == rightSum) {
            console.log(currentPosition);
            equal = true;
            break;
        }else {
            leftSum = 0;
            rightSum = 0;
        }
    }
    if(!equal) {
        console.log(`no`);
    }
}

solve([1, 2, 3, 3]);
solve([1, 2])
solve([[1]])
solve([1, 2, 3])
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);