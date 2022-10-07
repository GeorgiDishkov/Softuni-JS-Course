
const URL = 'http://localhost:3030'

async function getAllGames() {
    let data = await fetch(`${URL}/data/games`);
    if (data.status == 200) {
        return data.json();
    } else {
        throw new Error(`Missing data`)
    }
}

export {
    getAllGames,

}