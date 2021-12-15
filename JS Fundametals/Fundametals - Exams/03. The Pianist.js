function solve(input) {
    let comnand;
    let pianist = {};
    let action = {
        Add(piece, composer, key) {
            if (pianist.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pianist[piece] = { composer : composer, key : key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        },
        Remove(piece) {
            if (pianist.hasOwnProperty(piece)) {
                delete pianist[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        },
        ChangeKey(piece, newKey) {
            if (pianist.hasOwnProperty(piece)) {
                pianist[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    };

    let numberPiece = Number(input.shift());

    for (let i = 0; i < numberPiece; i++) {
        let [piece, composer, key] = input.shift().split(`|`);

        if (!pianist.hasOwnProperty()) {
            pianist[piece] = { composer: [composer], key: [key] };
        }
        console.log(pianist);
    }
    for (const line of input) {
        let [comnand, ...items] = line.split(`|`);
        if (comnand === `Stop`) {
            break;
        }
        action[comnand](...items);
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