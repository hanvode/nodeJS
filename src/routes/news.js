const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewController')


router.get('/:slog',newsController.slog)
router.get('/', newsController.index)


module.exports = router