function solve(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let clientPassword = input[index]

    while (clientPassword !== password) {
        index++;
        clientPassword = input[index]
    }
    console.log(`Welcome ${username}!`);

}