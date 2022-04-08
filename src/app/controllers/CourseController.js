const Course = require("../models/Course");
const {multipleMongooseToObject} = require('../../utils/mongoose')
class CourseController {
  //[GET] /course/:slug
  show(req, res,next) {
      Course.findOne({slug : req.params.slug})
        .then(course=>{
                res.render('courses/show')
        })
        .catch(next)
  }
}

module.exports = new CourseController();
