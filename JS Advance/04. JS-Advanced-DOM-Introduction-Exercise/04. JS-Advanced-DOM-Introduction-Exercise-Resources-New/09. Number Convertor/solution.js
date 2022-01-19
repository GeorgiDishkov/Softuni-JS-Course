function solve() {
    let secondChoice = document.getElementById('selectMenuTo');
    let binary = document.querySelector("#selectMenuTo option");
    binary.value = 'Binary';
    binary.innerHTML = `Binary`
    let Hexadecimal = document.createElement(`option`);
    Hexadecimal.value = 'Hexadecimal';
    Hexadecimal.innerHTML = `Hexadecimal`
    secondChoice.appendChild(Hexadecimal);
    document.querySelector('#container button').addEventListener('click', converter);

    function converter() {
        let type = document.getElementById('selectMenuTo').value;
        let number = Number(document.getElementById('input').value);
        let result = [];
        if (type === 'Binary') {
        while (number !== 0) {
                if (number % 2 == 0) {
                    result.unshift(0);
                    number = Math.floor(number / 2);
                } if (number % 2 == 1) {
                    result.unshift(1) ;
                    number = Math.floor(number / 2);
                }
            }
        }
        document.getElementById('result').value = result.join(``);

        if (type === 'Hexadecimal') {
            document.getElementById('result').value = number.toString(16).toUpperCase();
        }
    }
}