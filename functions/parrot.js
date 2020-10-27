exports.handler = async function(event, context) {
    if (event.queryStringParameters !== null) {
        return {
            statusCode: 200,
            body: JSON.stringify({message: event.queryStringParameters})
        }
    }
    
    else {
        return {
            statusCode: 400,
        };
    }
}