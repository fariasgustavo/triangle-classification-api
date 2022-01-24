import dynamoose from 'dynamoose';

export const dynamodbAdapter = () => {
  const db = new dynamoose.aws.sdk.DynamoDB({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: proccess.env.SECRET_KEY,
    region: 'us-east-1',
  });

  dynamoose.aws.ddb.set(db);

  return dynamoose;
};
