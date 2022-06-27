class smartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        altitude = Number(altitude);

        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
    }

    hike(peak, time, difficultyLevel) {
        time = Number(time);

        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error`${peak} is not in your current goals`
        }

        if (this.resources == 0) {
            throw new Error(`You don't have enough resources to start the hike`)
        }

        let diference = this.resources - (time * 10);

        if (diference < 0) {
            return `You don't have enough resources to complete the hike`
        } else {
            this.resources -= (time * 10);

            this.listOfHikes.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${resources}% resources left`
        }
    }
    rest(time) {
        time = Number(time);

        this.resources += (time * 10);

        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }
    showRecord(criteria) {

        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`
        }

        if (criteria == `hard`) {
            let filtred = this.listOfHikes.filter(e => e.difficultyLevel == criteria);

            if(filtred !== undefined){
                filtred.sort((a, b) => a.time - b.time);
    
                let winner = filtred[0];
    
                return `${this.username}'s best ${criteria} hike is ${winner.peak} peak, for ${winner.time} hours`
            }else{
                return `${this.username} has not done any ${criteria} hiking yet`
            }
        } else if (criteria == `easy`) {
            
            let filtred = this.listOfHikes.filter(e => e.difficultyLevel == criteria);
            filtred.sort((a, b) => a.time - b.time);

            let winner = filtred[0];

            return `${username}'s best ${criteria} hike is ${winner.peak} peak, for ${winner.time} hours`
        } else if (criteria == `all`) {
            let resutl = [];
            resutl.push(`All hiking records:`);
            this.listOfHikes.forEach((e) => resutl.push(`${this.username} hiked ${e.peak} for ${e.time} hours`));
            return resutl.join(`\n`)
        }
    }
}

const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.addGoal('Musala', 2925));
