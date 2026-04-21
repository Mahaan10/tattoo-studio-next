export interface SignIn {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface CurrentUserResponse {
  id: string;
  email: string;
  displayName: string | null;
  isActive: boolean;
  lastLoginAt: Date;
  createdAt: Date;
}

export interface LogoutResponse {
  message: string;
}
