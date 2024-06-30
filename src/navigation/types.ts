import { StackScreenProps } from "@react-navigation/stack";

export type AuthNavigator = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
};

type Keys = keyof AuthNavigator;

export type AuthNavigatorProps<T extends Keys> = StackScreenProps<
  AuthNavigator,
  T
>;
