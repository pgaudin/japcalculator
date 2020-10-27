exports.handler = async function(event, context) {
    if (event.queryStringParameters !== {}) {
        return {
            statusCode: 200,
            body: JSON.stringify({message: event.queryStringParameters.message})
        }
    }
    
    else {
        return {
            statusCode: 400,
        };
    }
}