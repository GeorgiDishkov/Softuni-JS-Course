function invenotry(arr) {
    let game = [];

    for (const itam of arr) {
        let [heroName, heroLevel,itams] = itam.split(` / `)
        itams =  itams.split(`, `)
        .sort((a , b) => b.localeCompare(a))
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

invenotry ([`Isacc / 25 / Apple, GravityGun`,
`Derek / 12 / BarrelVest, DestructionSword`,`
Hes / 1 / Desolator, Sentinel, Antara`])