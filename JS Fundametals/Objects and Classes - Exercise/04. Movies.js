function movies(arr) {
    let movies = [];

    for (const item of arr) {
        if (item.includes(`addMovie`)) {
            let splited = item.split(`addMovie `)[1]
            movies.push({
                name: splited
            })
        } else if (item.includes(`directedBy`)) {

            let [name, director] = item.split(` directedBy `)

            let checkedForMovie = movies.find(element => element.name === name)
            if (checkedForMovie) {
                checkedForMovie.director = director
            }
        } else if (item.includes(`onDate`)) {

            let [name, date] = item.split(` onDate `)

            let checkedForMovie = movies.find(element => element.name === name)
            if (checkedForMovie) {
                checkedForMovie.date = date
            }
        }
    }
    movies.forEach(element => {
        if (element.name && element.director && element.date) {
            console.log(JSON.stringify(element));
        }
    });
}