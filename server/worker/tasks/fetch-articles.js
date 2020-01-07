const redis = require('redis');
const client = redis.createClient();
const Articles = require('../../api/models/articles')
const { promisify } = require('util');

const setAsync = promisify(client.set).bind(client);

async function fetchArticles(){
        let data = await Articles.find({}).select('_id title author data date');
   
        const articles = await JSON.stringify(data);
        const success = await setAsync('articles',articles);
        console.log(`fetched ${data.length} articles`);
        

         await data.map(async (oneBlog)=>{
            const id = oneBlog._id.toString();
            const single = await JSON.stringify(oneBlog);
            await setAsync(id , single);
        });

        console.log(success);
}

module.exports = fetchArticles;