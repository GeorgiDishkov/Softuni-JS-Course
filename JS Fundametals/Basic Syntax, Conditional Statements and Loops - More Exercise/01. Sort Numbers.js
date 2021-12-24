function sortNumbers(first, second, third) {
    let array = [first, second, third]
    let sorted = array.sort()
    sorted = sorted.reverse()

    for (let i = 0; i < array.length; i++) {
        console.log(sorted[i]);
    }
}