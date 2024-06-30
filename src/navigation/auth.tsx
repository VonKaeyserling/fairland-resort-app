import React from "react";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";

import { LoginScreen } from "../screens/login";
import { WelcomeScreen } from "../screens/welcome";
import { SignUpScreen } from "../screens/signup";

import { AuthNavigator } from "./types";

export const { Navigator, Screen } = createStackNavigator<AuthNavigator>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export const AuthNavigatior = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="SignUp" component={SignUpScreen} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Welcome" component={WelcomeScreen} />
    </Navigator>
  );
};
