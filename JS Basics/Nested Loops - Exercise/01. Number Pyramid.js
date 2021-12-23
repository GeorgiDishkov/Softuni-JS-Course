function numberPyramid(input) {
    let pointer = Number(input);
    let collector = '';
    let flag = false;
    let current = 1;

    for (let row = 1; row <= pointer; row++) {
        for (let cell = 1; cell <= row; cell++) {
            if (current > pointer) {
                flag = true;
                break;
            }
            collector += current + " ";
            current++
        }
        console.log(collector);
        collector = ""
        if (flag) {
            break;
        }
    }
}