const router = require('express').Router();
const controller = require('../controllers/blogs')

router.route('/').get(controller.getAllBlogs);
router.route('/getbyid/:id').get(controller.getById);
router.route('/addblog').post(controller.postABlog);
router.route('/delete/:id').delete(controller.delete);


module.exports = router;