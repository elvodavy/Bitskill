const express = require('express');

const mongoose = require('mongoose');

const dotenv = require('dotenv');

const cors = require('cors');

const bodyParser = require('body-parser');

const route = require('./routes/routes');

dotenv.config({path:'./config/config.env'});

MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

db = mongoose.connection;

db.on('error', (err) =>{
    console.log(err);
})

db.once('open', () =>{
    console.log('Database Connection Established!');
})

const app = express();

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/api", route);

PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Server connection established on port ${PORT}`);
})
