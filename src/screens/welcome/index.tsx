import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text variant="headlineLarge">Bem vindo</Text>
        <Text variant="bodySmall">
          faça login ou cadastre-se para ter acesso ao app
        </Text>
      </View>

      <Button mode="contained" onPress={() => {}}>
        Login
      </Button>

      <Button mode="text" onPress={() => {}}>
        Cadastrar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  text_container: {
    flex: 1,
  },
});
