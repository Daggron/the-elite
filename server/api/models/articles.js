const mongoose = require('mongoose');

let articleSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    author:{
        type : String,
    },
    data:{
        type: String,
    },
    date:{
        type : String,
        default : Date.now.toString().substring(0,10)
    }
},
{
    timestamps:true
});

let Artilces = mongoose.model('Articles',articleSchema);

module.exports = Artilces;