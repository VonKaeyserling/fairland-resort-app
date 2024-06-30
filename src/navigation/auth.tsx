import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens/login";
import { WelcomeScreen } from "../screens/welcome";

export const { Navigator, Screen } = createStackNavigator();

export const AuthNavigatior = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Welcome" component={WelcomeScreen} />
    </Navigator>
  );
};
