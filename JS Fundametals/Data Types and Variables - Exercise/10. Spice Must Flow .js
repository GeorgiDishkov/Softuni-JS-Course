function solve (input) {
let spice = Number(input);
let sum = 0;
let days = 0;
for (let i = spice; i >= 100; i-=10) {
    days ++;
    sum += i - 26; 
}
if(sum > 26){
    sum -= 26;
}else {
    sum = 0;
}
console.log(days);
console.log(sum);
}

solve (`100`)