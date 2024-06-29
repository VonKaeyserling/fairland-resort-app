import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";

import { MainNavigatior } from "./main";

export const Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <PaperProvider theme={MD3DarkTheme}>
        <StatusBar style="light" />
        <MainNavigatior />
      </PaperProvider>
    </NavigationContainer>
  );
};
