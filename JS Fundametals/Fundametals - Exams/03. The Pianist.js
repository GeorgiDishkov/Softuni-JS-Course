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
    }
    for (const line of input) {
        let [comnand, ...items] = line.split(`|`);
        if (comnand === `Stop`) {
            break;
        }
        action[comnand](...items);
    }
    let sorted = Object.entries(pianist);

    sorted.sort((a,b) => {
        let pieceA = a[0];
        let composerA = Object.values(a[1])
        composerA = composerA[0].toString();
        let pieceB = b[0];
        let composerB = Object.values(b[1])
        composerB = composerB[0].toString();

        return pieceA.localeCompare(pieceB) || composerA.localeCompare(composerB)

    })
   
  for (const line of sorted) {
      let composer =  Object.values(line[1])
      console.log(`${line[0]} -> Composer: ${composer[0].toString()}, Key: ${composer[1].toString()}`);
  }
}