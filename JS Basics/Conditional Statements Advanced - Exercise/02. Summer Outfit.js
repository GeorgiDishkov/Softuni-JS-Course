function solve(input) {
    let grad = Number(input[0]);
    let summerType = input[1];
    let outfit = ""
    let shoes = ""

    if (grad >= 25) {

        switch (summerType) {
            case `Morning`:
                outfit = "T-Shirt"
                shoes = "Sandals"
                console.log(`It's ${grad} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case `Afternoon`:
                outfit = "Swim Suit"
                shoes = "Barefoot"
                console.log(`It's ${grad} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case `Evening`:
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${grad} degrees, get your ${outfit} and ${shoes}.`);
                break;
        }
    } else if (grad > 18) {
        switch (summerType) {
            case `Morning`:
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${grad} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case `Afternoon`:
                outfit = "T-Shirt"
                shoes = "Sandals"
                console.log(`It's ${grad} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case `Evening`:
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${grad} degrees, get your ${outfit} and ${shoes}.`);
                break;
        }
    } else if (grad >= 10) {
        switch (summerType) {
            case `Morning`:
                outfit = "Sweatshirt"
                shoes = "Sneakers"
                console.log(`It's ${grad} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case `Afternoon`:
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${grad} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case `Evening`:
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${grad} degrees, get your ${outfit} and ${shoes}.`);
                break;
        }
    } else {

    }
}