function sumTable() {
    let tables = document.querySelectorAll(`table tr td`)
    let sum = 0;

    for (let i = 1; i < tables.length-2; i += 2) {
        console.log(tables[i].textContent);
        const currentNum = Number(tables[i].textContent);
        sum += currentNum;
        console.log(currentNum);
        console.log(sum);
    }
    document.getElementById(`sum`).textContent = sum
}