
//route found, error on server
//generic function to respond with status of erorr or 500 for something went wrong
function errorHandler(error, request, response, next){
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "something went wrong",
            status: error.status
        }
    })
}
module.exports = errorHandler;