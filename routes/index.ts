import { Router } from "express"
import logsRouter from './logsRouter'

const router = Router()


router.use('/', logsRouter)


export default router