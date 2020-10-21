
export interface User{
  id: string;
  username: string;
  password: string;
}

export interface UserCreatePayload{
  username: string;
  password: string;
}

export interface UserUpdatePayload{
  username?: string;
  password?: string;
}
