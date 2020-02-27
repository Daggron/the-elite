const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);
const blogs = require('../../api/modals/blogs');

async function fetchBlogs(){
    try{
        const data = await blogs.find({}).select('_id data title date').sort({date : -1 });
        const stringified = JSON.stringify(data);
        const success = await setAsync('blogs' , stringified);
        console.log(success)
    }catch(err){
        console.log(err)
    }
}

module.exports = fetchBlogs;
