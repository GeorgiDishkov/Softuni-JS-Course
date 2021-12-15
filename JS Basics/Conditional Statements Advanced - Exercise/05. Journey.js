function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let sum;
    if (budget <= 100) {
        switch (season) {
            case `summer`:
                sum = budget * 0.30;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Camp - ${sum.toFixed(2)}`); break;
            case `winter`:
                sum = budget * 0.70;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Hotel - ${sum.toFixed(2)}`); break;
        }
    } else if (budget <= 1000) {
        switch (season) {
            case `summer`:
                sum = budget * 0.40;
                console.log(`Somewhere in Balkans`);
                console.log(`Camp - ${sum.toFixed(2)}`); break;
            case `winter`:
                sum = budget * 0.80;
                console.log(`Somewhere in Balkans`);
                console.log(`Hotel - ${sum.toFixed(2)}`); break;
        }
    }
    else if (budget >= 1000) {
        sum = budget * 0.90;
        console.log(`Somewhere in Europe`);
        console.log(`Hotel - ${sum.toFixed(2)}`);
    }

}