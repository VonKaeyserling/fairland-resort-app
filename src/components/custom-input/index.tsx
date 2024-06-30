import React from "react";
import { StyleSheet } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

type Props = TextInputProps & {};

export const CustomInput = ({ ...props }: Props) => {
  return (
    <TextInput
      style={styles.input}
      contentStyle={styles.input_text}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    backgroundColor: "#ffffff4e",
    borderRadius: 8,
    overflow: "hidden",
  },
  input_text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
