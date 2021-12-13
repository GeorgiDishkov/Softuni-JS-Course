function solve (input){
    let figure = input[0]
    let a = Number(input[1]);
    let b = Number(input[2]);
    let s
    switch (figure) {
        case "square":
            
            s = Math.pow(a, 2);
            console.log(s.toFixed(3));
        break;
    
        case "rectangle":
           
             s = a * b;
            console.log(s.toFixed(3));
        break;

        case "triangle":
             s = (a*b) / 2
            console.log(s.toFixed(3));
        break;
            
        case "circle":
             s = Math.PI*(Math.pow(a,2))
             console.log(s.toFixed(3));
        break;
    }
}