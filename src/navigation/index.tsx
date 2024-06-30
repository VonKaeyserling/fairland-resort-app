import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";

import { AppNavigatior } from "./app";
import { AuthNavigatior } from "./auth";

import { RootStackParamList } from "./types";

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export const Navigation = () => {
  const user = false;

  return (
    <NavigationContainer theme={DarkTheme}>
      <PaperProvider theme={MD3DarkTheme}>
        <StatusBar style="auto" />

        <Navigator screenOptions={screenOptions}>
          {user ? (
            <Screen name="App" component={AppNavigatior} />
          ) : (
            <Screen name="Auth" component={AuthNavigatior} />
          )}
        </Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};
