function extract(content) {
    let text = document.getElementById(content).textContent;
    let result = '';
    let regex = /\((.+?)\)/g
    let match = regex.exec(text);

    while (match != null) {
        result += match[1];
        result += (`; `)
        match = regex.exec(text);
    }
    return result;
}