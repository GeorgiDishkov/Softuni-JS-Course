function colorize() {
    let tables = document.querySelectorAll(`table tr`);
    for (let i = 1; i < tables.length; i+=2) {
        tables[i].style.backgroundColor = `teal`;
    }
}