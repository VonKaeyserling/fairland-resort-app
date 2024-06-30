import { CreateUserInput, LoginUserInput } from "../graphql/graphql";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  avatar: string;
}

export interface AuthRepository {
  loginUser: (data: LoginUserInput) => Promise<User | null>;
  createUser: (data: CreateUserInput) => Promise<User>;
  checkLogin: (token: string) => Promise<User | null>;
}
