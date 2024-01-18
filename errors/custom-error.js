

class custumAPIError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}
const createCustomError = (msg,statusCode) => {
    return new custumAPIError(msg,statusCode)
}
module.exports = { createCustomError, custumAPIError }