import AuthService, { JWTToken } from './infra/auth/auth-service';
import { TokenSecret } from './infra/auth/token-secret.protocol';
import ClientSecretManager from './infra/clients/secret-manager';

const init = async () => {
  const secretsManagerClient = new ClientSecretManager();
  const secrets = await secretsManagerClient.getSecretByID<TokenSecret>(
    process.env.SECRETS_MANAGER_ID
  );

  const authService = new AuthService(secrets);
  const token: string = authService.generateToken('mock-user-id');
  const payload: JWTToken = authService.decodeToken(token);

  console.log({
    payload,
  });
};

init();
