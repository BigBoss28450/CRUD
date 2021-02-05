import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function AppSpinner({ visible }) {
  return (
    visible && (
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size='large' color='#FFF' />
      </View>
    )
  );
}

const styles = StyleSheet.create({});
