const Router = require('express')
const router = new Router
const logsRouter = require('./logsRouter')

router.use('/log', logsRouter)

module.exports = router