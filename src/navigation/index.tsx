import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";

import { MainNavigatior } from "./main";
import { AuthNavigatior } from "./auth";

export const Navigation = () => {
  const user = false;

  return (
    <NavigationContainer theme={DarkTheme}>
      <PaperProvider theme={MD3DarkTheme}>
        <StatusBar style="auto" />
        {user ? <MainNavigatior /> : <AuthNavigatior />}
      </PaperProvider>
    </NavigationContainer>
  );
};
