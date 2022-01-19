function generateReport() {
    document.getElementById(`output`).value = '';
    const info = Array.from(document.querySelectorAll("input[type=checkbox]"));
    let collectInfo = [];
    const getInfoFromBase = Array.from(document.querySelectorAll("body tr"));
    const whatIsThis = getInfoFromBase[0].cells;
    console.log(whatIsThis[1].textContent);
    let resultForJSON = {};
    let resultCheckdName =[];
    let finalResult = [];
    for (let i = 0; i < info.length; i++) {
        if (info[i].checked) {
            resultCheckdName.push(info[i].attributes[1].textContent); 
            collectInfo.push(i);
        }else {
            resultCheckdName.push(undefined);
        }
        
    }
    for (let i = 1; i < getInfoFromBase.length; i++) {
        let trValue = getInfoFromBase[i].cells;
        for (let z = 0; z < info.length; z++) {
            let name = resultCheckdName[z];
            let value = trValue[z].textContent;

            if (name !== undefined) {
                resultForJSON[name] = value;
            }else continue;
        }
        finalResult.push(resultForJSON);
        resultForJSON = {};
    }
    document.getElementById(`output`).value += JSON.stringify(finalResult , finalResult.length ,`  ` );
}