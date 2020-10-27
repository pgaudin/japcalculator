exports.handler = async function(event, context) {
    if (event.queryStringParameters.message !== "") {
        return {
            statusCode: 200,
            body: JSON.stringify(event.queryStringParameters.message)
        }
    }
    
    else {
        return {
            statusCode: 400,
            body: JSON.stringify("T'as rien dit enculé !")
        };
    }
}