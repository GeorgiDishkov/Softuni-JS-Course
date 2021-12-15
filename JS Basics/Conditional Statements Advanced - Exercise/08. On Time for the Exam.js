function solve(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let deploidHour = Number(input[2]);
    let deploidMin = Number(input[3]);
    let examTotalMin = 0;
    let deploidTotalMin = 0;

    examTotalMin += examHour * 60
    examTotalMin += examMin
    deploidTotalMin += deploidHour * 60
    deploidTotalMin += deploidMin

    if (deploidTotalMin <= examTotalMin) {
        if (deploidTotalMin == examTotalMin) {
            console.log(`On time`);
        } else if (deploidTotalMin + 60 > examTotalMin) {
            if (deploidTotalMin + 30 >= examTotalMin) {
                let diff = Math.abs(deploidTotalMin - examTotalMin)
                console.log(`On time \n${diff} minutes before the start`);
            }
            else {
                let diff = Math.abs(deploidTotalMin - examTotalMin)
                console.log(`Early \n${diff} minutes before the start`);
            }
        } else {
            let diff = Math.abs(deploidTotalMin - examTotalMin)
            let diffHour
            diffHour = diff / 60
            diff = diff % 60
            if (diff < 10) {
                console.log(`Early \n${Math.floor(diffHour)}:0${diff} hours before the start`);
            } else
                console.log(`Early \n${Math.floor(diffHour)}:${diff} hours before the start`);
        }
    } else if (deploidTotalMin <= (examTotalMin + 60)) {
        let diff = Math.abs(examTotalMin - deploidTotalMin)
        console.log(`Late \n${diff} minutes after the start`);
    } else if (deploidTotalMin > examTotalMin) {
        let diff = Math.abs(deploidTotalMin - examTotalMin)
        let diffHour
        diffHour = diff / 60
        diff = diff % 60
        if (diff < 10) {
            console.log(`Late \n${Math.floor(diffHour)}:0${diff} hours after the start`);
        } else
            console.log(`Late \n${Math.floor(diffHour)}:${diff} hours after the start`);
    }
}