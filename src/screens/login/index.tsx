import React from "react";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomButton } from "../../components/custom-button";
import { CustomInput } from "../../components/custom-input";

import Logo from "../../../assets/logo.svg";

import { useAppNavigation } from "../../navigation/hooks";
import { LoginSchema, TLoginSchema } from "./utils";
import { LoginUserInput } from "../../services/graphql/graphql";
import { authService } from "../../services";

export const LoginScreen = () => {
  const navigation = useAppNavigation();

  const [loading, setLoading] = React.useState(false);

  const gotoSignUp = () => navigation.navigate("Auth", { screen: "SignUp" });

  const { control, handleSubmit, formState } = useForm<TLoginSchema>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "customer@test.com",
      password: "Daredevil95!",
    },
  });

  const onSubmit = async (data: LoginUserInput) => {
    setLoading(true);

    const user = await authService.loginUser(data);

    console.warn(user);

    setLoading(false);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/images/login_background.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.text_container}>
          <Logo />

          <Text style={styles.title} variant="headlineLarge">
            Fazer login
          </Text>

          <Text style={styles.subtitle} variant="bodyLarge">
            bem vindo de volta, ficamos com saudades
          </Text>

          <View style={styles.form_container}>
            <CustomInput
              control={control}
              placeholderTextColor={"#fff"}
              textColor="white"
              underlineColor="transparent"
              label="Email"
              name="email"
              error={!!formState.errors?.email}
            />
            <CustomInput
              control={control}
              textColor="white"
              underlineColor="transparent"
              label="Senha"
              name="password"
              error={!!formState.errors?.password}
              secureTextEntry
            />

            <CustomButton
              loading={loading}
              onPress={handleSubmit(onSubmit)}
              mode="contained"
              text="Login"
            />

            <Text
              style={[styles.subtitle, styles.account_link]}
              variant="bodyLarge"
            >
              Não tem uma conta?{" "}
              <Text
                onPress={gotoSignUp}
                style={[styles.subtitle, styles.account_link_href]}
                variant="bodyLarge"
              >
                Cadastre-se
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
