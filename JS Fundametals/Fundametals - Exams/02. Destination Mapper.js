function solve (input) {
    let regex = /([=|\/])[A-Z][A-Za-z]{2,}\1/g
    let travelPoints = 0;
    let destination = [];
    let result = input.match(regex);

    if(result){
        for (const line of result) {
            let travelDestinatinon = line.slice(1 , line.length -1);
            travelPoints += travelDestinatinon.length;
            destination.push(travelDestinatinon);
        }
    }
    console.log(`Destinations: ${destination.join(`, `)}`);
    console.log(`Travel Points: ${travelPoints}`);
}

solve (`=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=`)
solve (("ThisIs some InvalidInput"))