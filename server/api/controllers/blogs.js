const blogs = require('../modals/blogs');

exports.getAllBlogs = async (req,res)=>{
    blogs.find({}).select('_id title date data').sort({
        date : -1
    }).exec()
    .then(blogs=>{
        res.status(200).json({
            blogs : blogs,
            succcess : true,
            message : "Data Find Successfully",
            length : blogs.length
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            message : "Error while getting data to server",
            succcess : false
        })
    })
}


exports.postABlog = async (req,res)=>{
     if(req.body.title&&req.body.date){
        const blog = new blogs();
        blog.title = req.body.title;
        blog.data = req.body.data;
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