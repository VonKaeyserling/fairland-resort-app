/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** DateTime custom scalar type */
  DateTime: { input: any; output: any; }
  /** A valid email address */
  EmailAddress: { input: any; output: any; }
  File: { input: any; output: any; }
  /** A valid latitude coordinate */
  Latitude: { input: any; output: any; }
  /** A valid longitude coordinate */
  Longitude: { input: any; output: any; }
  /** A valid password should have at lest 8 characters, one special character, one capital letter, one lowercase letter, one number and should not contain the word "password" or "senha" */
  Password: { input: any; output: any; }
  /** A valid brazilian postal code */
  PostalCode: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: User;
};

export type Booking = {
  __typename?: 'Booking';
  /** Data em qua a reserva foi feita */
  bookingDate: Scalars['String']['output'];
  /** Data de entrada da reserva */
  dateIn: Scalars['String']['output'];
  /** Data de saida da reserva */
  dateOut: Scalars['String']['output'];
  /** Id da reserva */
  id: Scalars['ID']['output'];
  /** Booleano que mostra se foi pago ou não */
  paid: Scalars['Boolean']['output'];
  /** Preço da reserva */
  price: Scalars['Float']['output'];
  /** Quarto reservado */
  room: Room;
  /** Usuário que fez a reserva */
  user: User;
};

export type CreateBookingInput = {
  dateIn: Scalars['String']['input'];
  dateOut: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  room: Scalars['ID']['input'];
};

export type CreateHotelInput = {
  address: Scalars['String']['input'];
  addressNumber: Scalars['String']['input'];
  city: Scalars['String']['input'];
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  latitude: Scalars['Latitude']['input'];
  logo: Scalars['String']['input'];
  longitude: Scalars['Longitude']['input'];
  name: Scalars['String']['input'];
  neighborhood: Scalars['String']['input'];
  state: Scalars['String']['input'];
  summary: Scalars['String']['input'];
  thumbnail: Scalars['String']['input'];
  zipCode: Scalars['PostalCode']['input'];
};

export type CreateRoomInput = {
  description: Scalars['String']['input'];
  hotel: Scalars['ID']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  summary: Scalars['String']['input'];
  thumbnail: Scalars['String']['input'];
};

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['File']['input']>;
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['Password']['input'];
  passwordConfirm: Scalars['Password']['input'];
  role: UserRole;
  userName: Scalars['String']['input'];
};

export type Hotel = {
  __typename?: 'Hotel';
  /** Rua do hotel */
  address: Scalars['String']['output'];
  /** Número residencial do hotel */
  addressNumber: Scalars['String']['output'];
  /** Cidade do hotel */
  city: Scalars['String']['output'];
  /** Data de criação do hotel */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** A descrição do hotel */
  description: Scalars['String']['output'];
  /** Id do hotel */
  id: Scalars['ID']['output'];
  /** Um array de url's de imagens de hoteis */
  images: Array<Scalars['String']['output']>;
  /** Latitude do hotel */
  latitude: Scalars['Latitude']['output'];
  /** Url da logo do hotel */
  logo: Scalars['String']['output'];
  /** Longitude do hotel */
  longitude: Scalars['Longitude']['output'];
  /** Nome do hotel */
  name: Scalars['String']['output'];
  /** Bairro do hotel */
  neighborhood: Scalars['String']['output'];
  /** Classificação do hotel ex: 5 estrelas */
  rating: Scalars['Int']['output'];
  /** Array com os quartos do hotel */
  rooms: Array<Room>;
  /** Slug do hotel baseado no nome */
  slug: Scalars['String']['output'];
  /** Estado do hotel */
  state: Scalars['String']['output'];
  /** Uma pequena descrição do hotel de 10 as 30 palavras */
  summary: Scalars['String']['output'];
  /** Thumbnail a ser exibida do hotel */
  thumbnail: Scalars['String']['output'];
  /** Data da ultima atualização do hotel */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Cep do hotel */
  zipCode: Scalars['PostalCode']['output'];
};

export type HotelsPayload = QueryPayload & {
  __typename?: 'HotelsPayload';
  /** Quantidade total de hotéis criados */
  count: Scalars['Int']['output'];
  /** Array com hotéis */
  nodes: Array<Hotel>;
};

export type LoginUserInput = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['Password']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Usada para fazer uma reserva */
  createBooking: Booking;
  /** Usada para criar um hotel */
  createHotel: Hotel;
  /** Usada para criar um quarto de hotel */
  createRoom: Room;
  /** Usada para criar um usuário */
  createUser: AuthPayload;
  /** Usada para que o próprio usuário possa desativar a conta, mas não apagá-la */
  deactivateUser: Scalars['String']['output'];
  /** Usada para cancelar uma reserva */
  deleteBooking: Scalars['String']['output'];
  /** Usada para apagar um hotel */
  deleteHotel: Hotel;
  /** Usada para deletar um quarto de hotel */
  deleteRoom: Scalars['String']['output'];
  /** Usada para fazer login */
  loginUser: AuthPayload;
  /** Usada para atualizar um hotel */
  updateHotel: Hotel;
  /** Usada para atualizar um quarto de hotel */
  updateRoom: Room;
  /** Usada para atualizar informações não sensiveis (ex: senhas) */
  updateUser: AuthPayload;
  /** Usada para alterar a senha do usuário */
  updateUserPassword: AuthPayload;
  /** Usada para verificar um usuário */
  verifyUser: AuthPayload;
};


export type MutationCreateBookingArgs = {
  data: CreateBookingInput;
};


export type MutationCreateHotelArgs = {
  data: CreateHotelInput;
};


export type MutationCreateRoomArgs = {
  data: CreateRoomInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteBookingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoomArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginUserArgs = {
  data: LoginUserInput;
};


export type MutationUpdateHotelArgs = {
  data: UpdateHotelInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRoomArgs = {
  data: UpdateRoomInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationUpdateUserPasswordArgs = {
  data: UpdateUserPasswordInput;
};

export type Options = {
  orderBy?: InputMaybe<OrderBy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum OrderBy {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Usada para buscar uma reserva pelo id */
  booking: Booking;
  /** Usada para buscar reservas de um admin */
  bookingsByAdmin: Array<Booking>;
  /** Usada para buscar reservas de um usuário */
  bookingsByUser: Array<Booking>;
  /** Usada para buscar um hotel pelo id */
  hotel: Hotel;
  /** Usada para buscar um hotel pelo slug */
  hotelBySlug: Hotel;
  /** Usada para buscar hotéis */
  hotels: Array<Hotel>;
  /** Usada para buscar um hotel pelo id do admin */
  hotelsByAdmin: HotelsPayload;
  /** Usada para buscar um quarto pelo id */
  room: Room;
  /** Usada para buscar um quartos */
  rooms: Array<Room>;
  /** Usada para buscar quartos pelo id do hotel */
  roomsByHotel: RoomPayload;
};


export type QueryBookingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelArgs = {
  id: Scalars['ID']['input'];
  roomOptions?: InputMaybe<Options>;
};


export type QueryHotelBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryHotelsArgs = {
  roomOptions?: InputMaybe<Options>;
};


export type QueryHotelsByAdminArgs = {
  options?: InputMaybe<Options>;
};


export type QueryRoomArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRoomsArgs = {
  filter?: InputMaybe<RoomFilter>;
};


export type QueryRoomsByHotelArgs = {
  hotel: Scalars['ID']['input'];
  options?: InputMaybe<Options>;
};

export type QueryPayload = {
  count: Scalars['Int']['output'];
};

export type Review = {
  __typename?: 'Review';
  /** Id da review */
  id: Scalars['ID']['output'];
  /** Classificação da review */
  rating: Scalars['Int']['output'];
  /** Texto da review */
  review: Scalars['String']['output'];
  /** Quarto que recebeu a review */
  room: Room;
  /** Usuário que fez a review */
  user: User;
};

export type Room = {
  __typename?: 'Room';
  /** Data em que foi criado */
  createdAt: Scalars['DateTime']['output'];
  /** Uma descrição do quarto */
  description: Scalars['String']['output'];
  /** Hotel a qual o quarto pertence */
  hotel: Hotel;
  /** Id do quarto */
  id: Scalars['ID']['output'];
  /** Um array de url's de imagens do quarto */
  images?: Maybe<Array<Scalars['String']['output']>>;
  /** Nome do quarto */
  name: Scalars['String']['output'];
  /** Preço por noite do quarto */
  price: Scalars['Float']['output'];
  /** Classificação do quarto ex: 5 estrelas */
  rating?: Maybe<Scalars['Int']['output']>;
  /** Uma pequena descrição do quarto */
  summary: Scalars['String']['output'];
  /** Thumbnail a ser exibida do quarto */
  thumbnail: Scalars['String']['output'];
  /** Data da ultima atualização */
  updatedAt: Scalars['DateTime']['output'];
};

export type RoomFilter = {
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  maxRating?: InputMaybe<Scalars['Int']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  minRating?: InputMaybe<Scalars['Int']['input']>;
};

export type RoomPayload = QueryPayload & {
  __typename?: 'RoomPayload';
  /** Quantidade total de quartos criados */
  count: Scalars['Int']['output'];
  /** Array com quartos */
  nodes: Array<Room>;
};

export type UpdateHotelInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressNumber?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  latitude?: InputMaybe<Scalars['Latitude']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['Longitude']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['PostalCode']['input']>;
};

export type UpdateRoomInput = {
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserPasswordInput = {
  password: Scalars['Password']['input'];
  passwordConfirm: Scalars['Password']['input'];
};

export type User = {
  __typename?: 'User';
  /** Mostra se o usuário esta ativo ou não */
  active: Scalars['Boolean']['output'];
  /** Url da imagem de perfil de cada usuário */
  avatar: Scalars['String']['output'];
  /** Reservas do usúario */
  bookings?: Maybe<Array<Booking>>;
  /** Email único de cada usuário */
  email: Scalars['EmailAddress']['output'];
  /** Primeiro nome do usuário */
  firstName: Scalars['String']['output'];
  /** Id único de cada usuário */
  id: Scalars['ID']['output'];
  /** Sobrenome nome do usuário */
  lastName: Scalars['String']['output'];
  /** Senha criptografada de cada usuário */
  password: Scalars['Password']['output'];
  /** Timestamp do momento em que o usuário mudou a senha */
  passwordChangedAt?: Maybe<Scalars['String']['output']>;
  /** Review feitas pelo usuário */
  reviews?: Maybe<Array<Review>>;
  /** Enum do tipo de função (ADMIN | USER) */
  role: UserRole;
  /** Nome de usuário único de cada usuário */
  userName: Scalars['String']['output'];
  /** Mostra se o usuário verificou o email ou não */
  verified: Scalars['Boolean']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', email: any, firstName: string, id: string, lastName: string, verified: boolean, userName: string, avatar: string } } };

export type LoginUserMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', email: any, firstName: string, id: string, lastName: string, verified: boolean, userName: string, avatar: string } } };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;