
export interface User{
  id: string;
  name: string;
  password: string;
}

export interface UserCreatePayload{
  name: string;
  password: string;
}
