const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1'
});
var docClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10'
});

const getStats = async (dbTableName) => {
  let params = {
    TableName: dbTableName,
    Key: {
      'h': 'stat',
      'r': 'overall'
    }
  };

  console.log(`geting------- ${JSON.stringify(params, null, 2)} \n`)
  const result = await docClient.get(params).promise();
  return result;
}

exports.getStats = getStats;
