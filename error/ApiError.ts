

export class ApiError extends Error{
    public readonly status: number
    constructor(status: number, message: string){
        super()
        this.status = status
        this.message = message
    }
    static badRequest(message?: string) {
        return new ApiError(400, message || 'Bad Request')
    }
    static notFound(message?: string) {
        return new ApiError(404, message || 'Not Found') 
    }
    static methodNotAllowed(message?: string) {
        return new ApiError(405, message || 'Method Not Allowed')
    }
    static serverError(message?: string) {
        return new ApiError(500, message || 'Internal Server Error')
    }
}
