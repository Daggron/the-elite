const express = require('express');
const app = express();
require('dotenv/config');
const expressSession = require('express-session');
const mongoose = require('mongoose');
const fetch = require('./server/worker/index');

const uri = process.env.DB;
mongoose.connect(uri,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
});

let db = mongoose.connection;
db.once('open',()=>{
    console.log('Db on fire');
});

db.on('error',(err)=>{
    console.log(err)
});


fetch();

app.use(express.json());

app.use(expressSession({
    secret : 'A keyboard secret',
    saveUninitialized : true,
    resave : true
}));

app.use('/articles',require('./server/api/routes/article'))

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`App started on Port ${port}`)
})