import { Router } from "express"
import { LogController } from '../controllers/logController'

const router = Router()


router.post('/log', LogController.add)
router.get('/log/filter', LogController.getAllActions)

export default router