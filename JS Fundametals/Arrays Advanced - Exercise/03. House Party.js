function houseParty(arr) {
    let listOfGuests = [];
    for (let i = 0; i < arr.length; i++) {
        let [ name , isgoing , answere , latter] = arr[i].split(` `);
        if (answere === `not`) {
            if(listOfGuests.includes(name)) {
                let index = listOfGuests.indexOf(name);
                listOfGuests.splice(index , 1);
            }
            else {
                console.log(`${name} is not in the list!`);
            }
        }else {
            if(listOfGuests.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
            else {
                listOfGuests.push(name);
            }
        }
    }
    console.log(listOfGuests.join(`\n`));
}