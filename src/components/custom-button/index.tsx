import React from "react";
import { StyleSheet } from "react-native";
import { Button, ButtonProps, Text } from "react-native-paper";

type Props = Omit<ButtonProps, "children"> & {
  text: string;
};

export const CustomButton = ({ text, mode, ...props }: Props) => {
  return (
    <Button
      style={[styles.button, mode !== "text" && styles.button_contained]}
      textColor="#fff"
      {...props}
    >
      <Text style={styles.button_text}>{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 8,
  },
  button_contained: {
    backgroundColor: "#000",
  },
  button_text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
