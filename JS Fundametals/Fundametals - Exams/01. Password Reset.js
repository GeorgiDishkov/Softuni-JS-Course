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