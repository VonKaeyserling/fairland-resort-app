import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CustomButton } from "../../components/custom-button";
import { CustomInput } from "../../components/custom-input";

import Logo from "../../../assets/logo.svg";

import { useAppNavigation } from "../../navigation/hooks";
import { SignUpSchema, TSignUpSchema } from "./utils";
import { UserRole } from "../../services/graphql/graphql";
import { authService } from "../../services";

export const SignUpScreen = () => {
  const navigation = useAppNavigation();

  const [loading, setLoading] = React.useState(false);

  const gotoLogin = () => navigation.navigate("Auth", { screen: "Login" });

  const { control, handleSubmit, formState } = useForm<TSignUpSchema>({
    mode: "onChange",
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "customer@test.com",
      firstName: "teste",
      lastName: "teste",
      password: "Daredevil95!",
      passwordConfirm: "Daredevil95!",
      role: UserRole.User,
      userName: "Customer",
    },
  });

  const onSubmit = async (data: TSignUpSchema) => {
    setLoading(true);

    const user = await authService.createUser(data);

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
            Cadastre-se
          </Text>

          <Text style={styles.subtitle} variant="bodyLarge">
            cadastra-se para ter acesso as melhores ofertas e experiências
          </Text>

          <View style={styles.form_container}>
            <CustomInput
              control={control}
              placeholderTextColor={"#fff"}
              textColor="white"
              underlineColor="transparent"
              label="Nome"
              error={!!formState.errors?.firstName}
              name="firstName"
            />

            <CustomInput
              control={control}
              placeholderTextColor={"#fff"}
              textColor="white"
              underlineColor="transparent"
              label="Sobrenome"
              error={!!formState.errors?.lastName}
              name="lastName"
            />

            <CustomInput
              control={control}
              placeholderTextColor={"#fff"}
              textColor="white"
              underlineColor="transparent"
              label="Nome de usúario"
              error={!!formState.errors?.userName}
              name="userName"
            />

            <CustomInput
              control={control}
              placeholderTextColor={"#fff"}
              textColor="white"
              underlineColor="transparent"
              label="Email"
              error={!!formState.errors?.email}
              name="email"
            />

            <CustomInput
              control={control}
              textColor="white"
              underlineColor="transparent"
              label="Senha"
              secureTextEntry
              error={!!formState.errors?.password}
              name="password"
            />

            <CustomInput
              control={control}
              textColor="white"
              underlineColor="transparent"
              label="Confirme a senha"
              secureTextEntry
              error={!!formState.errors?.passwordConfirm}
              name="passwordConfirm"
            />

            <CustomButton
              loading={loading}
              mode="contained"
              text="Cadastrar"
              onPress={handleSubmit(onSubmit)}
            />

            <Text
              style={[styles.subtitle, styles.account_link]}
              variant="bodyLarge"
            >
              Já tem uma conta?{" "}
              <Text
                onPress={gotoLogin}
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
