const Router = require('express')
const router = new Router
const logController = require('../controllers/logController')

router.post('/createlog', logController.add)

module.exports = router