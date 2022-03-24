function makeADictionary(arr) {
    let resultObj = []
    for (const line of arr) {

        let parcedFormJSON = JSON.parse(line)
        let terms = Object.keys(parcedFormJSON);
        terms = terms.toString()
        let tempValue = Object.values(parcedFormJSON);
        tempValue = tempValue.toString()

        let researchForKeys = resultObj.find(element => element.terms === terms)
        if (researchForKeys) {
            researchForKeys.description = tempValue
        } else {
            resultObj.push({
                terms: terms,
                description: tempValue
            })
        }
        resultObj.sort((a, b) => a.terms.localeCompare(b.terms))

    }
    resultObj.forEach(element => {
        console.log(`Term: ${element.terms} => Definition: ${element.description}`);

    });
}