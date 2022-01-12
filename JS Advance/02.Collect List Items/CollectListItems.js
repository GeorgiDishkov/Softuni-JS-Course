function extractText() {
    let arrayFromList = document.getElementById(`items`).children
    let textBox = document.getElementById(`result`);
    let result = [];
    for (const line of Array.from(arrayFromList)) {
        console.log(line);
        result.push(line.textContent)
    }
    textBox.textContent = result.join(`\n`)
}