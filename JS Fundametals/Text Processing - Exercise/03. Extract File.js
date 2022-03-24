function extractingFiles (link) {
    let dot = link.lastIndexOf(`.`)
    let separate = link.lastIndexOf(`\\`)

    console.log(`File name: ${link.slice(separate+1 , dot)}`);
    console.log(`File extension: ${link.slice(dot+1)}`);

}