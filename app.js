const express = require('express');
const app =express();
const bodyParser = require('body-parser');
var multer = require('multer');
var upload= multer();
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
const url = 'mongodb+srv://we00054643:1Licynduy@shopping-nbfge.mongodb.net/test?retryWrites=true&w=majority';

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());
app.use(upload.array());

const Contact=require('./routes/contact');
const User=require('./routes/user');

app.use('/contact',Contact);
app.use('/user',User);
app.use((req,res,next)=>{
    res.status(200).json({
        message:'Hello, Welcome my API !!!!!!!!!'
    });
    next();
});



module.exports = app;