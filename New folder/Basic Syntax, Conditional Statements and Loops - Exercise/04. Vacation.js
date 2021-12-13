function solve(number, type, day) {
    let totalPrice;
    number = Number(number);
    if (type == "Students") {
        if (day == 'Friday') {
            if (number >= 30) {
                totalPrice = number * 8.45
                totalPrice = totalPrice - (totalPrice * 0.15)
            } else {
                totalPrice = number * 8.45
            }
        } else if (day == 'Saturday') {
            if (number >= 30) {
                totalPrice = number * 9.80
                totalPrice = totalPrice - (totalPrice * 0.15)
            } else {
                totalPrice = number * 9.80
            }
        } else if (day == 'Sunday') {
            {
                if (number >= 30) {
                    totalPrice = number * 10.46
                    totalPrice = totalPrice - (totalPrice * 0.15)
                } else {
                    totalPrice = number * 10.46
                }
            }
        }

    } else if (type == 'Business') {
        if (day == 'Friday') {
            if (number >= 100) {
                let newNumber = number - 10;
                totalPrice = newNumber * 10.90
            } else {
                totalPrice = number * 10.90
            }
        } else if (day == 'Saturday') {
            if (number >= 100) {
                let newNumber = number - 10;
                totalPrice = newNumber * 15.60
            } else {
                totalPrice = number * 15.60
            }
        } else if (day == 'Sunday') {
            if (number >= 100) {
                let newNumber = number - 10;
                totalPrice = newNumber * 16
            } else {
                totalPrice = number * 16
            }
        }
    } else if (type == 'Regular') {
        if (day == 'Friday') {
            if (number >= 10 && number <= 20) {
                totalPrice = number * 15
                totalPrice = totalPrice - (totalPrice * 0.05)
            } else {
                totalPrice = number * 15
            }
        } else if (day == 'Saturday') {
            if (number >= 10 && number <= 20) {
                totalPrice = number * 20
                totalPrice = totalPrice - (totalPrice * 0.05)
            } else {
                totalPrice = number * 20
            }
        } else if (day == 'Sunday') {
            if (number >= 10 && number <= 20) {
                totalPrice = number * 22.50
                totalPrice = totalPrice - (totalPrice * 0.05)
            } else {
                totalPrice = number * 22.50
            }
        }
    }
    console.log("Total price: " + totalPrice.toFixed(2));
}
