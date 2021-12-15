function solve(input) {
    let fruit = input[0];
    let day = input[1];
    let quality = Number(input[2])
    let sum = 0
    if (quality <= 0) {
        console.log(`error`);
    } else {
        switch (day) {
            case `Monday`:
            case `Tuesday`:
            case `Wednesday`:
            case `Thursday`:
            case `Friday`:
                switch (fruit) {
                    case `banana`:
                        sum = quality * 2.50;
                        console.log(sum.toFixed(2)); break;
                    case `apple`:
                        sum = quality * 1.20;
                        console.log(sum.toFixed(2)); break;
                    case `orange`:
                        sum = quality * 0.85;
                        console.log(sum.toFixed(2)); break;
                    case `grapefruit`:
                        sum = quality * 1.45;
                        console.log(sum.toFixed(2)); break;
                    case `kiwi`:
                        sum = quality * 2.70;
                        console.log(sum.toFixed(2)); break;
                    case `pineapple`:
                        sum = quality * 5.50;
                        console.log(sum.toFixed(2)); break;
                    case `grapes`:
                        sum = quality * 3.85;
                        console.log(sum.toFixed(2)); break;
                    default:
                        console.log(`error`);
                        break;
                } break;
            case `Saturday`:
            case `Sunday`:
                switch (fruit) {
                    case `banana`:
                        sum = quality * 2.70; console.log(sum.toFixed(2)); break;
                    case `apple`:
                        sum = quality * 1.25; console.log(sum.toFixed(2)); break;
                    case `orange`:
                        sum = quality * 0.90; console.log(sum.toFixed(2)); break;
                    case `grapefruit`:
                        sum = quality * 1.60; console.log(sum.toFixed(2)); break;
                    case `kiwi`:
                        sum = quality * 3.00; console.log(sum.toFixed(2)); break;
                    case `pineapple`:
                        sum = quality * 5.60; console.log(sum.toFixed(2)); break;
                    case `grapes`:
                        sum = quality * 4.20; console.log(sum.toFixed(2)); break;
                    default:
                        console.log(`error`);
                        break;
                } break;
            default:
                console.log(`error`);
                break;
        }
    }
}