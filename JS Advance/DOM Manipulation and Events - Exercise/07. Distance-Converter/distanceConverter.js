function attachEventsListeners() {
    let [input , output] = document.querySelectorAll(`input[type="text"]`);
    document.getElementById(`convert`).addEventListener(`click` , onClick); 
    
    
    let types = {
        kilometers :0.001,
        meters : 1,
        centimeters : 100,
        millimeters : 1000,
        miles : 0.000621371,
        yards : 1.094,
        feet :  3.281,
        inches : 39.3701,
    }
    
    function onClick () {
        let choiceOne = document.getElementById(`inputUnits`);
        let convertFrom = choiceOne.options[choiceOne.selectedIndex].text.toLowerCase();
        
        let choice = document.getElementById(`outputUnits`);
        let convertTo = choice.options[choice.selectedIndex].text.toLowerCase();
        console.log(convertTo);
        let result = 0;
        let isNumber = Number(input.value);
        if (!(isNaN(isNumber))){
            result += isNumber/types[convertFrom];
            output.value = result * types[convertTo];
             
        }
    }

}