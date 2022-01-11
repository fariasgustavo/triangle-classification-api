import { SecretsManager } from 'aws-sdk';

export interface AuthSecretManager {
  getSecretByID<T>(secretID: string): Promise<T>;
}

export default class ClientSecretManager implements AuthSecretManager {
  async getSecretByID<T>(secretID = ''): Promise<T> {
    const awsSecretManager = new SecretsManager({
      apiVersion: '2017-10-17',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY || '',
        secretAccessKey: process.env.AWS_SECRET_KEY || '',
      },
      region: process.env.AWS_REGION,
    });
    const { SecretString } = await awsSecretManager
      .getSecretValue({ SecretId: secretID })
      .promise();

    return JSON.parse(SecretString || '');
  }
}
