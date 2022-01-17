import ClientSecretManager from '../../clients/secret-manager';
import JWTService, { TokenAuthentication } from '../jwt.service';
import { TokenSecret } from '../token-secret.protocol';

export const createJWTService = async (): Promise<TokenAuthentication> => {
  const secretClient = new ClientSecretManager();
  const secrets = await secretClient.getSecretByID<TokenSecret>(
    process.env.SECRETS_MANAGER_ID
  );
  const jWTService = new JWTService(secrets);

  return jWTService;
};
