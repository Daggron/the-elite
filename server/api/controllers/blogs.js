const blogs = require('../modals/blogs');
const redis = require('redis');
const {promisify} = require('util');
const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);

exports.getAllBlogs = async (req,res)=>{
    try{
    const rawData = await getAsync('blogs');
    const blogs = await JSON.parse(rawData);
    res.status(200).json({
        blogs : blogs,
        succcess : true,
        message : "Data Find Successfully",
        length : blogs.length
    })
    }catch(err){
        console.log(err);
        res.status(500).json({
            succcess : false,
            message : "An unexcpected error occurred",
        })
    }
    
}


exports.postABlog = async (req,res)=>{
     if(req.body.title&&req.body.date){
        const blog = new blogs();
        blog.title = req.body.title;
        blog.data = req.body.data;
        blog.tagLine = req.body.tagLine;
        let date = new Date();
        blog.date = date.toUTCString();
        blog.save().then(()=>{
            res.status(200).json({
                succcess : true,
                message : "Your Blog is posted successfully"
            })
        }).catch(err=>{
            console.log(err);
            res.status(500).json({
                succcess : false,
                message : "Some Server error occured while posting the data"
            })
        })
    }else{
        return res.json({
            succcess : false,
            message : "Please fill title and body to the blog"
        })
    }
}

exports.getById = async (req,res)=>{
    try{

        const raw = await getAsync(req.params.id);
        const blogs = await JSON.parse(raw);
        res.status(200).json({
            succcess : true,
            message : 'Data fetch successfully',
            blogs : blogs
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            succcess : false,
            message : 'Error fetching data from server'
        })
    }
}

exports.delete = async(req,res)=>{
    try{
        const deleted = await blogs.findByIdAndDelete(req.params.id);
        res.status(200).json({
            succcess : true,
            message : "Deleted Successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            succcess : false,
            message : "Error while connecting to server this has been notified to the delevloper"
        })
    }
}

