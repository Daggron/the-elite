const Articles = require('../models/articles');

exports.all = async (req,res)=>{
    Articles.find({})
    .select('_id title author data date')
    .exec()
    .then(data=>{
        res.json({
            articles: data
        })
    });
}

exports.post = async (req,res)=>{
    let articles = new Articles();
    articles.title = req.body.title;
    articles.author = req.body.author;
    articles.data = req.body.data;
    articles.save()
    .then(()=>{
        console.log('Saved Articles');
        res.json({
            success : "OK"
        })
    })
    .catch(err=>{
        console.log(err);
    })
}