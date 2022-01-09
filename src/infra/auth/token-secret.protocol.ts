export enum TokenAlgorithm {
  SHA256 = 'SHA256',
  HS256 = 'HS256',
}

export interface TokenSecret {
  tokenAlgorithm: TokenAlgorithm;
  tokenSecret: string;
}
