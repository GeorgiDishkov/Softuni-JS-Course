function solve(input) {
    let command;
    let Album = {}
    let actions = {
        Add(piece, composer, key) {
            if (!Album.hasOwnProperty(piece)) {
                Album[piece] = { [composer]: key }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
            
        },
        Remove(piece) {
            if(Album.hasOwnProperty(piece)){
                delete Album[piece];
                console.log(`Successfully removed ${piece}!`);
            }else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        },
    }
    let index = Number(input.shift());

    for (let i = 0; i < index; i++) {
        let text = input.shift().split(`|`);

        let piece = text[0];
        let composer = text[1];
        let key = text[2];

        if (!Album.hasOwnProperty(piece)) {
            Album[piece] = { [composer]: key }
        }
    }
    while (command = input.shift() !== `Stop`) {
        let text = input.shift().split(`|`);
        let [actionName , ... atributes]

    }

}



function ChangeKey(piece , key) {

    if (Album.hasOwnProperty(piece)){
        Album.piece = key
    }

}




solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])

console.log(`----`);
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'])