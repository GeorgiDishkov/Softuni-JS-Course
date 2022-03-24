function invenotry(arr) {
    let game = [];

    for (const itam of arr) {
        let [heroName, heroLevel,itams] = itam.split(` / `)
        itams =  itams.split(`, `)
        .sort((a , b) => a.localeCompare (b))
        .join(`, `)
        game.push({
            heroName,
            heroLevel: Number(heroLevel),
            itams 
        })
        game.sort((a , b) => a.heroLevel - b.heroLevel)
    }
    game.forEach(element => {
        console.log(`Hero: ${element.heroName}`);
        console.log(`level => ${element.heroLevel}`);
        console.log(`items => ${element.itams}`);
    });
}