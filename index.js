exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from DEV Lambda! change something'),
    };
    return response;
};
