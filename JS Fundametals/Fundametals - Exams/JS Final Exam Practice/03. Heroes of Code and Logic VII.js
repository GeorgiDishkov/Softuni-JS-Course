function solve(input) {
    let numberOfHeroes = Number(input.shift());
    let heroes = {};
    let actions = {
        CastSpell(heroName, mpNeeded, spellName) {
            if (heroes[heroName].mana >= mpNeeded) {
                heroes[heroName].mana -= +mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mana} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        },
        TakeDamage(heroName, damage, attacker) {
            if (heroes[heroName].health > damage) {
                heroes[heroName].health -= +damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].health} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroes[heroName];
            }
        },
        Recharge(heroName, mp) {
            if ((heroes[heroName].mana + +mp) > 200) {
                console.log(`${heroName} recharged for ${200 - heroes[heroName].mana} MP!`);
                heroes[heroName].mana = 200;
            } else {
                console.log(`${heroName} recharged for ${mp} MP!`);
                heroes[heroName].mana += +mp;
            }
        },
        Heal(heroName, hp) {
            if ((heroes[heroName].health + +hp) > 100) {
                console.log(`${heroName} healed for ${100 - heroes[heroName].health} HP!`);
                heroes[heroName].health = 100;
            } else {
                console.log(`${heroName} healed for ${hp} HP!`);
                heroes[heroName].health += +hp;
            }
        }
    };
    // take heroes
    for (let i = 0; i < numberOfHeroes; i++) {
        let currentHero = input.shift();
        [name, hp, mp] = currentHero.split(` `);
        heroes[name] = {
            health: +hp,
            mana: +mp,
        }
    }
    // commands
    for (const line of input) {
        if (line == `End`) {
            break;
        }
        [command, ...atributes] = line.split(' - ')
        actions[command](...atributes);
    }
    for (const hero in heroes) {
        console.log(`${hero}\n HP: ${heroes[hero].health}\n MP: ${heroes[hero].mana}`);
          
    }    
}
// solve([
//     '1',
//     'Solmyr 66 15',
//     'TakeDamage - Solmyr - 66 - Orc',
//     'CastSpell - Solmyr - 15 - ViewEarth',
//     'End']);

// console.log(`----------- `);
solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);