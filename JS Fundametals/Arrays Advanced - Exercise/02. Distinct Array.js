function distincyArray (arr) {
    let clearArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (clearArr.includes(element))
        {
            continue;
        }else {
            clearArr.push(element);
        }
    }
    console.log(clearArr.join(` `));
}