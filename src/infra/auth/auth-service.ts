import { TokenSecret } from './token-secret.protocol';
import jwt from 'jsonwebtoken';

export interface JWTToken {
  sub: string;
}

export interface TokenAuthentication {
  generateToken(sub: string): string;
  decodeToken(token: string): JWTToken;
}

export default class AuthService implements TokenAuthentication {
  constructor(private secret: TokenSecret) {}

  generateToken(sub: string): string {
    return jwt.sign({ sub }, this.secret.tokenSecret);
  }

  decodeToken(token: string): JWTToken {
    return jwt.verify(token, this.secret.tokenSecret) as JWTToken;
  }
}
