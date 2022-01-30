function solve() {
    const rows = Array.from(document.querySelectorAll(`tbody tr td`));
    const buttons = document.getElementsByTagName(`tfoot`)[0].addEventListener('click', onClick);

    function onClick(e) {
        let winGame = true;
        let text = e.target.textContent;

        if (text == `Quick Check`) {
            // cells
            let rowsCheck = [];
            let cellCheck = [];

            for (let i = 0; i < rows.length; i += 3) {
                let firstNumber = Number(rows[i].children[0].value);
                let secondNumber = Number(rows[i + 1].children[0].value);
                let thirdNumber = Number(rows[i + 2].children[0].value);
                // cellCheck
                if (firstNumber > 0 && firstNumber <= 3) {
                    if (secondNumber > 0 && secondNumber <= 3) {
                        if (thirdNumber > 0 && thirdNumber <= 3) {
                            rowsCheck.push(firstNumber, secondNumber, thirdNumber);
                        } else {
                            winGame = false;
                            break;
                        }
                    } else {
                        winGame = false;
                        break;
                    }
                } else {
                    winGame = false;
                    break;
                }
            }
            for (let i = 1; i <= 3; i++) {
                let firstNumber = Number(rows[i - 1].children[0].value);
                let secondNumber = Number(rows[i + 2].children[0].value);
                let thirdNumber = Number(rows[i + 5].children[0].value);
                // rowsCheck
                if (firstNumber > 0 && firstNumber <= 3) {
                    if (secondNumber > 0 && secondNumber <= 3) {
                        if (thirdNumber > 0 && thirdNumber <= 3) {
                            cellCheck.push(firstNumber, secondNumber, thirdNumber);
                        } else {
                            winGame = false;
                            break;
                        }
                    } else {
                        winGame = false;
                        break;
                    }
                } else {
                    winGame = false;
                    break;
                }
            }
            if (winGame) {
                for (let i = 0; i < rowsCheck.length; i += 3) {
                    let checkSetOne = new Set();
                    checkSetOne.add(rowsCheck[i]);
                    checkSetOne.add(rowsCheck[i + 1]);
                    checkSetOne.add(rowsCheck[i + 2]);
                    if (checkSetOne.size != 3) {
                        winGame = false;
                        break;
                    } else {
                        winGame = true;
                    }
                    let checkSetTwo = new Set();
                    checkSetTwo.add(cellCheck[i]);
                    checkSetTwo.add(cellCheck[i + 1]);
                    checkSetTwo.add(cellCheck[i + 2]);
                    if (checkSetTwo.size != 3) {
                        winGame = false;
                        break;
                    } else {
                        winGame = true;
                    }
                }
            }
            if (winGame) {
                let table = document.getElementsByTagName(`table`)[0]
                table.style.border = '2px solid green'
                let answere = document.getElementById(`check`).children[0]
                answere.textContent = `You solve it! Congratulations!`;
                answere.style.color = 'green'
            } else if (!winGame) {
                let table = document.getElementsByTagName(`table`)[0]
                table.style.border = '2px solid red'
                let answere = document.getElementById(`check`).children[0]
                answere.textContent = `NOP! You are not done yet...`;
                answere.style.color = 'red'
            }
        } else if (text == `Clear`) {
            for (const element of rows) {
                element.children[0].value = ``;
                let answere = document.getElementById(`check`).children[0]
                answere.textContent = ``;
                answere.style.color = '';
                let table = document.getElementsByTagName(`table`)[0]
                table.style.border = 'none'
            }
        }
    }
}