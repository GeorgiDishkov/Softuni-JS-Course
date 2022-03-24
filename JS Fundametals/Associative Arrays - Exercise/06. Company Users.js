function companyUsers(input) {

    let company = {};

    for (const line of input) {
        let [nameCompany, nameID] = line.split(` -> `)
        if (company.hasOwnProperty(nameCompany)) {
            company[nameCompany].push(nameID);
        } else {
            company[nameCompany] = [nameID];
        }
    }
    let sorted = Object.keys(company)
    sorted.sort((a, b) => a.localeCompare(b))

    for (const keys of sorted) {
        console.log(keys);
        let softed = new Set(company[keys])
        for (const value of softed) {
            console.log(`-- ${value}`);
        }
    }
}