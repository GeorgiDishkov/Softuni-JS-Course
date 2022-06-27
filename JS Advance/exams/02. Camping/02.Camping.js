class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        money = Number(money);

        if (this.priceForTheCamp[condition] == undefined) {
            throw new Error(`Unsuccessful registration at the camp.`)
        }

        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        }

        if (this.listOfParticipants.some(e => e.name == name)) {
            return `The ${name} is already registered at the camp.`
        }

        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        }

        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {

        if (!this.listOfParticipants.some(e => e.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        let position = this.listOfParticipants.findIndex(e => e.name == name);
        this.listOfParticipants.splice(position, 1);

        //
        // this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);
        //

        return `The ${name} removed successfully.`
    }


    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(e => e.name == participant1)

        if (!player1) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame == `WaterBalloonFights`) {
            let player2 = this.listOfParticipants.find(e => e.name == participant2)

            if (player2 != undefined) {
                if (player1.condition == player2.condition) {
                    if (player1.power == player2.power) {
                        //drow
                        return `There is no winner.`
                    }

                    if (player1.power > player2.power) {
                        //win player one 
                        player1.wins += 1;
                        return `The ${player1.name} is winner in the game ${typeOfGame}.`
                    }

                    if (player1.power < player2.power) {
                        //win player two
                        player2.wins += 1;
                        return `The ${player2.name} is winner in the game ${typeOfGame}.`
                    }
                } else {
                    throw new Error(`Choose players with equal condition.`)

                }
            } else {
                throw new Error(`Invalid entered name/s.`)
            }
        }

        if (typeOfGame == `Battleship`) {
            let player1 = this.listOfParticipants.find(e => e.name == participant1)

            if (player1 !== undefined) {

                player1.power += 20;
                return `The ${player1.name} successfully completed the game ${typeOfGame}.`

            } else {
                throw new Error(`Invalid entered name/s.`)
            }
        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)

        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(e => {
                result.push(`${e.name} - ${e.condition} - ${e.power} - ${e.wins}`)
            })
        return result.join(`\n`);
    }
}



const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
