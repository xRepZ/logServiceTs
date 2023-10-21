import { LogsModel } from '../models/models'
import { ApiError } from '../error/ApiError'
import e, { Request, Response, NextFunction } from 'express';
import { json } from 'sequelize';

export const LogController = {
    add: async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const { user_id, action } = req.body
            
            if (!user_id || !action) {
                return next(ApiError.badRequest("empty request"))
            }

            const log = await LogsModel.create({ user_id, action })
            return resp.json(log)
        } catch (e) {
            console.log(e)
        }

    },
    getAllActions: async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const { user_id, action, ...params } = req.query
            const page = Number(params.page) || 1
            const limit = Number(params.limit) || 9

            // для пропуска товаров при переходе на страницу

            let offset = limit * page - limit
            let actions

            if (!user_id && !action) {
                actions = await LogsModel.findAll({ limit, offset })
            }
            if (user_id && action) {
                actions = await LogsModel.findAll({ where: { user_id, action }, limit, offset })
            }
            if (user_id && !action) {
                actions = await LogsModel.findAll({ where: { user_id }, limit, offset })
            }
            if (!user_id && action) {
                actions = await LogsModel.findAll({ where: { action }, limit, offset })
            }

            return resp.json(actions)
        } catch (e) {
            console.log(e)
        }
    }
}

