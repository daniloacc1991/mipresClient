export interface UserCredentials {
  usuario: string;
  password: string;
}

export interface JwtPayload {
  usuario: string;
  email: string;
  scope: string;
}
