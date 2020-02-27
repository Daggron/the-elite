const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    data : {
        type : String,
        requiredn : true
    },
    date : {
        type : String,
        required : true,
        default : Date.UTC()
    }
},{
    timestamps : true
})

let Blogs = mongoose.model('Blogs' , blogSchema);

module.exports = Blogs;