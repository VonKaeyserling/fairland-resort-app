import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { HelperText, TextInput, TextInputProps } from "react-native-paper";

type Props<T extends FieldValues> = UseControllerProps<T> &
  TextInputProps & {
    name: string;
  };

export const CustomInput = <T extends FieldValues>({
  control,
  name,
  ...props
}: Props<T>) => {
  const fieldError = control?._formState.errors[name]?.message;

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            contentStyle={styles.input_text}
            {...props}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!fieldError}
          />
        )}
        name={name}
      />
      {fieldError && (
        <HelperText type="error" visible={!!fieldError}>
          {fieldError?.toString()}
        </HelperText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
  },
  input: {
    backgroundColor: "#ffffff4e",
    borderRadius: 8,
    overflow: "hidden",
  },
  input_text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
