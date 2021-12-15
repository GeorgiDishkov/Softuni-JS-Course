function solve(input) {
    let days = Number(input[0]);
    let typeApart = input[1];
    let submit = input[2];
    let roomForOP = 0;
    let apartament = 0;
    let presidentApartament = 0;
    let price = 0;
    days = days - 1;
    roomForOP = (roomForOP + 18) * days;
    apartament = (apartament + 25) * days;
    presidentApartament = (presidentApartament + 35) * days;
    if (days < 10) {
        apartament = apartament * 0.70;
        presidentApartament = presidentApartament * 0.90;
    } else if (days >= 10 && days <= 15) {
        apartament = apartament * 0.65;
        presidentApartament = presidentApartament * 0.85;
    } else if (days > 15) {
        apartament = apartament * 0.50;
        presidentApartament = presidentApartament * 0.80;
    }
    switch (typeApart) {
        case `room for one person`:
            price += roomForOP;
            break;
        case `apartment`:
            price += apartament;
            break;
        case `president apartment`:
            price += presidentApartament;
            break;
    }
    if (submit === `positive`) {
        price = price + (price * 0.25)
    } else if (submit === `negative`) {
        price = price - (price * 0.10)
    }
    console.log(price.toFixed(2));
}