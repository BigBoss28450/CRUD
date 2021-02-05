import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../config/colors";

export default function AppTextInput({ label, placeholder, onChangeText }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{ marginBottom: 10 }}>
      <Text>{label}</Text>
      <View
        style={{
          paddingHorizontal: 10,
          borderColor: isFocused ? colors.blue : colors.gray,
          borderWidth: 2,
          borderRadius: 5,
          backgroundColor: colors.white,
          height: 40,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
