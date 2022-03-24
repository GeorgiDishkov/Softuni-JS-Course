function solve(text) {
    let arr = text.split(` `)

    for (let line of arr) {
        if (line[0] == '#' && line.length > 1) {
            let flag = true;
            line = line.slice(1);
            for (let ascci of line) {
                let ascciChar = ascci.charCodeAt()
                if (ascci.charCodeAt() < 65 || ascci.charCodeAt() > 90 && ascci.charCodeAt() < 97 || ascci.charCodeAt() > 122) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                console.log(line);
            }
        }
    }
}