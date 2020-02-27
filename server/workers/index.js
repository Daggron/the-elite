const cronJOb = require('node-cron');
const fetchBlogs = require('./fetch-blogs/fetchBlogs');

function fetchData(){
    cronJOb.schedule('* * * * *',()=>{
        fetchBlogs();
    })
}

module.exports = fetchData;