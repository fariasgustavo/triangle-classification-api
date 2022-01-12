import dynamoose from 'dynamoose';

export const dynamodbAdapter = () => {
  const db = new dynamoose.aws.sdk.DynamoDB({
    accessKeyId: 'AKID',
    secretAccessKey: 'SECRET',
    region: 'us-east-1',
  });

  dynamoose.aws.ddb.set(db);

  return dynamoose;
};
