function solve (input) {
    let password = input.shift();
    // while ((command = input.shift()) !== `Done`) {
        
    // }


    function TakeOdd (index) {
        let result = ``;
        for (let i = 0; i < index.length; i++) {
            
            if (i % 2 !== 0){
                result += index[i];
            }
        }
        console.log(result);
        return result;
    }
    

}
function Cut (password , index , length) {
        let start = Number(index);
        let end = Number(length);
        let first = password.substring(0,start); 
        let second = password.substring(start , (start+end))
        let third = password.substring(start+end);

        result = first+third

        console.log(result);
    }


    function Substitute(password , substring, substitute) {
        let result = password;
        let regex = new RegExp (substring);
    //   while (password.includes(substring)) {
    //     result = result.replace(regex,substitute)
    //   }

       console.log(result.replace(regex,substitute));

    }
    Substitute(`icecream::hot::mer` , `::` , `-`)
solve ([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done']);
solve ([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done']);
