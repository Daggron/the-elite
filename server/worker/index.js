const cronJob = require('node-cron');
const fetchArticles = require('./tasks/fetch-articles');

function fetch_Articles(){
    cronJob.schedule('* * * * *',()=>{
        console.log('Running evrey minute');
        fetchArticles();
    });
    
}

module.exports = fetch_Articles;
