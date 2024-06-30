import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import {
  CreateUserDocument,
  CreateUserInput,
  LoginUserDocument,
  LoginUserInput,
} from "../graphql/graphql";

import { AuthRepository, User } from "./types";

export class ApolloAuthService implements AuthRepository {
  client: ApolloClient<NormalizedCacheObject>;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  async loginUser(data: LoginUserInput): Promise<User | null> {
    const response = await this.client.mutate({
      mutation: LoginUserDocument,
      variables: { data },
    });

    if (!response.data?.loginUser) {
      return null;
    }

    const formatedUser: User = {
      id: response.data?.loginUser.user.id,
      firstName: response.data?.loginUser.user.firstName,
      lastName: response.data?.loginUser.user.lastName,
      email: response.data?.loginUser.user.email,
      userName: response.data?.loginUser.user.userName,
      avatar: response.data?.loginUser.user.avatar,
    };

    return formatedUser;
  }

  async createUser(data: CreateUserInput): Promise<User> {
    const response = await this.client.mutate({
      mutation: CreateUserDocument,
      variables: { data },
    });

    if (!response.data?.createUser) {
      throw new Error("Não foi possível criar o usuário");
    }

    const { id, avatar, email, firstName, lastName, userName } =
      response.data?.createUser.user;

    return {
      id,
      firstName,
      lastName,
      email,
      userName,
      avatar,
    };
  }

  async checkLogin(token: string): Promise<User | null> {
    return null;
  }
}
