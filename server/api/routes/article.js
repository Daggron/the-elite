const router = require('express').Router();
const articleController = require('../controllers/article.controller');

router.get('/all', articleController.all);
router.post('/post',articleController.post);

module.exports = router;