function encodeAndDecodeMessages() {

    let decode = [];
    let encode = [];
    document.getElementById(`main`).addEventListener(`click`, onClick);
    function onClick(e) {
        if (e.target.tagName == `BUTTON` && e.target.textContent == `Encode and send it`) {
            let incoming = document.getElementsByTagName(`textarea`)[0].value;
            if(incoming != ``){
                decode = [];
                console.log(incoming);
                for (const line of incoming) {
                    let convert = line.charCodeAt();
                    convert++;
                    let result = String.fromCharCode(convert);
                    decode.push(result);
                }
                document.getElementsByTagName(`textarea`)[0].value = ``;
                document.getElementsByTagName(`textarea`)[1].value = decode.join('');
            }

        } else if (e.target.tagName == `BUTTON` && e.target.textContent == `Decode and read it` && document.getElementsByTagName(`textarea`)[0].value == ``) {
            encode = [];
            for (const line of decode) {
                let convert = line.charCodeAt();
                convert--;
                let result = String.fromCharCode(convert);
                encode.push(result);
            }
            document.getElementsByTagName(`textarea`)[0].value = encode.join('');
            document.getElementsByTagName(`textarea`)[1].value = ``;
            decode = [];
        }
    }
}