function solve(input) {
    let rooms = input.split('|');
    let life = 100;
    let walet = 0;
    let room = 0;
    let live = true;

    let actions = {
        potion(value) {
            let currentLife = life;
            life += Number(value);
            if (life > 100) {
                console.log(`You healed for ${100 - currentLife} hp.`);
                life = 100;
            } else {
                console.log(`You healed for ${value} hp.`);
            }
            console.log(`Current health: ${life} hp.`);
        },
        chest(value) {
            console.log(`You found ${value} bitcoins.`);
            walet += Number(value);
        },
        attack(enemy, value) {
            life -= Number(value);
            if (life <= 0) {
                live = false;
                console.log(`You died! Killed by ${enemy}.`);
                console.log(`Best room: ${room}`);
            } else {
                console.log(`You slayed ${enemy}.`);
            }
        }
    }
    for (const line of rooms) {
        if (!live) {
            break;
        }
        room++;
        [comand, value] = line.split(` `);
        if (comand == `potion` || comand == `chest`) {
            actions[comand](value);
        } else {
            actions[`attack`](comand, value);
        }
    }
    if (live) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${walet}`);
        console.log(`Health: ${life}`);
    }
}
solve("rat 10|bat 20|potion -2|rat 10|chest 100|boss 70|chest 1000");
console.log(`=========================`);
// solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
solve("rat 100|potion -2")
