function walking(input) {
    let totalWalk = 10000;
    let i = 0
    let sum = 0;
    while (sum <= totalWalk) {
        if (input[i] === `Going home`) {
            sum = sum + Number(input[i + 1])
            break;
        }sum = sum + Number(input[i])
         i++;   
    } if (sum >= totalWalk) {
        console.log(`Goal reached! Good job!`);
        sum = Math.abs(sum - totalWalk)
        console.log(`${sum} steps over the goal!`);
    } else {
        sum = totalWalk - sum;
        console.log(`${sum} more steps to reach goal.`);
    }
}