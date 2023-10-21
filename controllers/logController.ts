const { UsersModel } = require('../models/models')
const ApiError = require('../error/ApiError')
const _ = require('lodash')

const LogController = {
    add: async (req, resp, next) => {
        try {
            const { user_id, action } = req.body
            if (!user_id || !action) {
                return next(ApiError.badRequest("empty request"))
            }

            const log = await UsersModel.create({ user_id, action })
            return resp.json(log)
        } catch (e) {
            console.log(e)
        }

    },
    // get: async (req, resp, next) => {
    //     try {
    //         const users = await UsersModel.findAll()
    //         if (!users) {
    //             return next(ApiError.notFound("Empty users list"))
    //         }
    //         return resp.json(users)

    //     } catch (e) {
    //         console.log(e)
    //     }

    // },
    // change: async (req, resp, next) => {
    //     try {
    //         const { id, ...params } = req.body
    //         if (!id) {
    //             return next(ApiError.badRequest("id field is empty"))
    //         }
    //         const user = await UsersModel.findOne({ where: id })
    //         if (!user) {
    //             return next(ApiError.notFound(`can't find user with id = ${id}`))
    //         }

    //         if (_.isMatch(user, params)) {
    //             return next(ApiError.badRequest("Nothing to change"))
    //         }

    //         user.update({ ...params })
    //         user.save()
    //         return resp.json(user)
    //     } catch (e) {
    //         console.log(e)
    //     }

    // },
}

module.exports = LogController