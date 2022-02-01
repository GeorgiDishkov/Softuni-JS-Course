function add(num) {
    let sum = 0;

    function inner(curNum) {
        sum+=curNum;
        return inner;
    }
    inner.toString = () => {
        return sum;
    }
    return inner(num);
}

console.log(add(1)(6)(-3).toString());