const express = require("express");
const server = express();
const database = require('./data/db.js');

server.listen(3400, () => { 
    console.log("server is running on port 3400");
})

//middleware
server.use(express.json());

server.get('/', (request, response) => {
    response.send('Server is running!');
})

server.get('/api/users', (request, response) => {
    database.find()
        .then(users => {
            response.status(200).json(users)
        })
        .catch(err => {
            response.status(500).json({success: false, err, message: `request users failed`})
        });
});