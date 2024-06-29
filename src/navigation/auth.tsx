import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens/login";
import { WelcomeScreen } from "../screens/welcome";

export const { Navigator, Screen } = createStackNavigator();

export const AuthNavigatior = () => {
  return (
    <Navigator>
      <Screen name="Welcome" component={WelcomeScreen} />
      <Screen name="Login" component={LoginScreen} />
    </Navigator>
  );
};
