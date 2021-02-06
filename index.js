exports.handler = async (event) => {     
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    //with updated code
    return response;
};