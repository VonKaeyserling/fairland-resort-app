import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/home";

import { AppStackParamList } from "./types";

export const { Navigator, Screen } = createStackNavigator<AppStackParamList>();

export const AppNavigatior = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};
