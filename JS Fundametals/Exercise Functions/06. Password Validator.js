function passwordValidator(string) {
    let dropDownString = string.split(``);
    let numbers = [];
    let lowCaseChar = [];
    let upperCaseChar = [];
    let other = [];
    let lengthCheck = false;
    let digitAndLatterCheck = false;
    let digits = false;

    for (let i = 0; i < dropDownString.length; i++) {
        let latterOrNum = dropDownString[i];
        let latterCheck = latterOrNum.charCodeAt(0);

        if (latterCheck >= 48 && latterCheck <= 57) {
            numbers.push(latterOrNum)
        } else if (latterCheck >= 97 && latterCheck <= 122) {
            lowCaseChar.push(latterOrNum)
        } else if (latterCheck >= 65 && latterCheck <= 90) {
            upperCaseChar.push(latterOrNum)
        } else {
            other.push(latterOrNum)
        }
    } if (string.length >= 6 && string.length <= 10) {
        lengthCheck = true;
    } else {
        console.log(`Password must be between 6 and 10 characters`);
    } if (other.length <= 0) {
        digitAndLatterCheck = true;
    } else {
        console.log(`Password must consist only of letters and digits`);
    } if (numbers.length >= 2) {
        digits = true;
    } else {
        console.log(`Password must have at least 2 digits`);
    } if (lengthCheck && digits && digitAndLatterCheck) {
        console.log(`Password is valid`);
    }
}