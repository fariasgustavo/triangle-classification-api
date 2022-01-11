import { APIGatewayProxyEvent } from 'aws-lambda';

const classification = async (event: APIGatewayProxyEvent) => {
  console.log({ event });
  return {
    body: JSON.stringify([{ message: 'Hello AWS CDK' }]),
    statusCode: 200,
  };
};

module.exports = { classification };
