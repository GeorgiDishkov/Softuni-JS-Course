function  towns(townInfo) {
    let solve = [];
    for (const line of townInfo) {
        let [town , latitude , longitude] = line.split(` | `)
        let Temp = {
            town:town,
            latitude:Number(latitude).toFixed(2),
            longitude:Number(longitude).toFixed(2)
        }
        solve.push(Temp);
        console.log(Temp);
    }
}