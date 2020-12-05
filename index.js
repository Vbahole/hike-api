const AWS = require('aws-sdk'),
    dynamoDb = new AWS.DynamoDB.DocumentClient(),
    processResponse = require('./process-response'),
    TABLE_NAME = process.env.TABLE_NAME,
    IS_CORS = process.env.IS_CORS;

exports.handler = async event => {
    if (event.httpMethod === 'OPTIONS') {
		return processResponse(IS_CORS);
    }

    const params = {
        TableName: TABLE_NAME,
        Key: {
        'h': 'stat',
        'r': 'overall'
        }
    }
    try {
      const response = await dynamoDb.get(params).promise();
      return processResponse(IS_CORS, response.Item);
    } catch (dbError) {
      let errorResponse = `Error: Execution update, caused a Dynamodb error, please look at your logs.`;
      if (dbError.code === 'ValidationException') {
        if (dbError.message.includes('reserved keyword')) errorResponse = `Error: You're using AWS reserved keywords as attributes`;
      }
      console.log(dbError);
      return processResponse(IS_CORS, errorResponse, 500);
    }
};
