function solve(input) {
    let season = input[0];
    let nights = Number(input[1]);
    let studio
    let apartament

    switch (season) {
        case `May`:
        case `October`:
            studio = 50;
            apartament = 65; break;
        case `June`:
        case `September`:
            studio = 75.20;
            apartament = 68.70; break;
        case `July`:
        case `August`:
            studio = 76;
            apartament = 77; break;
    }
    studio = studio * nights;
    apartament = apartament *nights;
    if (nights > 14 && season === `May` || season === `October`) {
        studio = studio * 0.70;
    } else if (nights > 7 && season === `May` || season === `October`) {
        studio = studio * 0.95;
    } if (nights > 14 && season === `June` || season === `September`) {
        studio = studio * 0.80;
    } if (nights > 14) {
        apartament = apartament * 0.90;
    }
    console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}