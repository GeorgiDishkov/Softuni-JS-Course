function gramophone (brand , album , song) {

    let fullTime = (album.length * brand.length) * song.length /2

    let times = Math.ceil(fullTime / 2.5);
    
    console.log(`The plate was rotated ${times} times.`);

}