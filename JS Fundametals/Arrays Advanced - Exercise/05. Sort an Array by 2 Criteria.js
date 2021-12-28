function sortAnArrayBy2Criterias (arr) {
    arr
    .sort()
    .sort((a, b) => a.length - b.length)
    // .sort((a, b) => a.length - b.length)  // ==> same way just by one more step :)
    console.log(arr.join(`\n`));
}