function attachEventsListeners() {
    let time = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }
    const content = document.getElementsByTagName(`body`);
    content[0].addEventListener(`click`, onClick);

    function onClick(e) {
        if (e.target.type == 'button') {
            let currentDiv = e.target.parentNode;
            let currentTime = Number(currentDiv.querySelector(`input[type="text"]`).value);
            let currentType = currentDiv.querySelector(`input[type="text"]`).id;
            const answere = caclucate (currentTime , currentType);
            document.getElementById(`days`).value = answere.days;
            document.getElementById(`hours`).value = answere.hours;
            document.getElementById(`minutes`).value = answere.minutes;
            document.getElementById(`seconds`).value = answere.seconds;
        }
    }
    function caclucate (value , type){
        let inDays = value / time[type];

        return {
            days : inDays,
            hours : inDays * time.hours,
            minutes : inDays * time.minutes,
            seconds : inDays * time.seconds
        }
    }
}   
