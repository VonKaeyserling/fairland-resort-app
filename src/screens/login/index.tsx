import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    color: "white",
  },
});
