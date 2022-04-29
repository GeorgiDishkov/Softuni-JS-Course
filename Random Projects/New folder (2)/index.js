const express = require('express');
const Datastore  = require('nedb')

const server = express();

server.listen(3000 , () => console.log(`Server listening at port 3000 rn`));
server.use(express.static(`public`));
server.use(express.json({limit : 1000}))

const database = new Datastore(`database.db`);
database.loadDatabase();

server.post (`/api` , (req, res) => {
    let data = req.body;
    let timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert (data)

    res.json({
        status : `success`,
        timestamp : timestamp,
        latitude : data.latitude,
        longitude  : data.longitude,
        mood : data.mood,
    });
})
server.get(`/api` , (req, res) => {
    database.find ({} , (err, data) => {
        if(err) {
            res.end();
            return;
        }
        res.json(data);
    })
})