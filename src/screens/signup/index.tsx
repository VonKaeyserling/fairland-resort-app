import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { CustomButton } from "../../components/custom-button";
import { CustomInput } from "../../components/custom-input";

import Logo from "../../../assets/logo.svg";

export const SignUpScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/images/login_background.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.text_container}>
          <Logo />

          <Text style={styles.title} variant="headlineLarge">
            Cadastre-se
          </Text>

          <Text style={styles.subtitle} variant="bodyLarge">
            cadastra-se para ter acesso as melhores ofertas e experiências
          </Text>

          <View style={styles.form_container}>
            <CustomInput
              placeholderTextColor={"#fff"}
              textColor="white"
              underlineColor="transparent"
              label="Nome"
            />
            <CustomInput
              placeholderTextColor={"#fff"}
              textColor="white"
              underlineColor="transparent"
              label="Email"
            />

            <CustomInput
              textColor="white"
              underlineColor="transparent"
              label="Senha"
              secureTextEntry
            />

            <CustomInput
              textColor="white"
              underlineColor="transparent"
              label="Confirme a senha"
              secureTextEntry
            />

            <CustomButton mode="contained" text="Cadastrar" />

            <Text
              style={[styles.subtitle, styles.account_link]}
              variant="bodyLarge"
            >
              Já tem uma conta?{" "}
              <Text
                style={[styles.subtitle, styles.account_link_href]}
                variant="bodyLarge"
              >
                Entrar
              </Text>
            </Text>
          </View>
        </View>
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
  form_container: {
    margin: "auto",
    width: "100%",
  },
  account_link: {
    marginTop: 16,
    textAlign: "center",
  },
  account_link_href: {
    color: "#ffffff",
  },
});
