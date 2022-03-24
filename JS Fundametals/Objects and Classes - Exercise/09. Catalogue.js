function catalogue(arr) {
    let catalogueClasses = [];
    let mainLatter = ``;
    for (const line of arr) {
        let [key , atribute] = line.split(` : `)
        catalogueClasses.push({
            key,
            atribute
        })
        catalogueClasses.sort((a , b) => a.key.localeCompare(b.key))
    }
    catalogueClasses.forEach(element => {
        let curentLatter = element.key
        curentLatter = curentLatter.charAt(0);
        if (mainLatter != curentLatter){ 
            mainLatter = curentLatter;
            console.log(mainLatter);
        }
            console.log(` ${element.key}: ${element.atribute}`);
    });
}