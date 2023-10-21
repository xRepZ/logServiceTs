import { ApiError } from "../error/ApiError"
import {Request, Response, NextFunction} from 'express';

export const errorHandler = (err: Error, req: Request, resp: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        return resp.status(err.status).json({message: err.message})
    }
    return resp.status(500).json({message: "unexpected error"})
}