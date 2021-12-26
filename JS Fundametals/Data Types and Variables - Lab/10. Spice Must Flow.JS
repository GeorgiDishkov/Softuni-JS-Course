function solve (input) {
    let spices = 0;
    let yield = Number(input);
    let days = 0;

    while (yield >= 100) {
        days ++;
        spices += yield;
        if(spices < 26) {
            spices = 0;
        }
        spices -= 26;
        yield -= 10;
    }
    if(spices < 26) {
        spices = 0;
    }else {
        spices -= 26;
    }
    console.log(days);
    console.log(spices);
}

solve (111)
solve (200)
solve (450)