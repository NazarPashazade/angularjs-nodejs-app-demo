/// connect Express
const express = require('express')
const app = express();


/// connect Mongoose
const mongoose = require('mongoose');


// Connect Body-Parser (convert req.body to JSON)
const bodyParser = require('body-parser');
app.use(bodyParser.json())


/// Origin Access
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', "*");
    next();
});


// RequestMapping (URL)
const contactRoute = require('./contactDB')
app.use('/contacts', contactRoute)




//Server Port
app.listen(3000)


//Connect to MongoDB
mongoose.connect('mongodb+srv://NazarPasha:nazarpasha11@cluster0.sckw7.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true },
    () => {
        console.log("Succesfully Connected to MongoDB")
    })