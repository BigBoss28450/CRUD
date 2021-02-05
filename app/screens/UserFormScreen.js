import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";

export default function UserFormScreen() {
  return (
    <View style={{ padding: 20 }}>
      <AppTextInput label='Nombre' placeholder='John' />
      <AppTextInput label='Apellido' placeholder='Doe' />
      <AppTextInput
        label='Correo electrónico'
        placeholder='ejemplo@correo.com'
      />
    </View>
  );
}

const styles = StyleSheet.create({});
