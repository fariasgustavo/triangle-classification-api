import dynamoose from 'dynamoose';

export const dynamodbAdapter = () => {
  const db = new dynamoose.aws.sdk.DynamoDB({
    accessKeyId: 'AKIA6A4PPU6FLYOQLTLI',
    secretAccessKey: '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',
    region: 'us-east-1',
  });

  dynamoose.aws.ddb.set(db);

  return dynamoose;
};
