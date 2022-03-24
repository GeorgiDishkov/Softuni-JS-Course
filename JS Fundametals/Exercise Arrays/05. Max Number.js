function solve (input) {
    let result = [];
    for (let current = 0; current < input.length; current++) {
        const firstEl = input[current];
        let bigger = true;
        for (let next = current + 1; next < input.length; next++) {
            const secondEl = input[next];
            if(secondEl >= firstEl) {
                bigger = false;
            }
        }
        if(bigger) {
            result.push(firstEl);
        }
    }
    console.log(result.join(' '));
}
