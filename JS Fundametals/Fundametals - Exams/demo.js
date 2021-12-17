function Switch (mainString, firstString, secondString){

    let firstIndex = mainString.indexOf(firstString[0])
    let lastIndex = mainString.indexOf(firstString[firstString.length-1])

    let firstHalf = mainString.slice(0,firstIndex);
    let secondHalf = mainString.slice(Num(lastIndex)+1)

    console.log(firstHalf  +secondString+  secondHalf);
    return firstHalf+secondString+ secondHalf;
}

Switch (`Hawai::RomeCyprys-Greece` , `Hawai` , `Bulgaria`)