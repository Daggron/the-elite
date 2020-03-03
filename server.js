const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');
const fetchData = require('./server/workers/index');

let uri = 'mongodb+srv://Abhay:Abhay@cluster0-tc0fc.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(uri,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
})

let db = mongoose.connection;

db.once('open',()=>{
    console.log('Data base connected');
});

db.on('error',(err)=>{
    console.log(err);
})


//middle vars 
app.use(cors());

app.use(express.json());

fetchData();

app.use('/',require('./server/api/routes/blogs'));

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})