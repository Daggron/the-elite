const router = require('express').Router();
const controller = require('../controllers/blogs')

router.route('/').get(controller.getAllBlogs);
router.route('/getbyid/:id').get(controller.getById);
router.route('/addblog').post(controller.postABlog);


module.exports = router;