import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { CustomButton } from "../../components/custom-button";

import Logo from "../../../assets/logo.svg";

export const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/images/welcome_background.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.text_container}>
          <Logo />

          <Text style={styles.title} variant="headlineLarge">
            Bem vindo
          </Text>
          <Text style={styles.subtitle} variant="bodyLarge">
            faça login ou cadastre-se para ter acesso ao app
          </Text>
        </View>

        <CustomButton mode="contained" text="Login" />

        <CustomButton mode="text" text="Cadastrar" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    backgroundColor: "#00000099",
    flex: 1,
    padding: 32,
  },
  text_container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: "#939393",
  },
});
