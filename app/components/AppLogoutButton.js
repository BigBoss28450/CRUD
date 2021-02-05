import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AppLogoutButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.3}>
      <View
        style={{
          backgroundColor: colors.white,
          borderColor: colors.danger,
          borderRadius: 20,
          borderWidth: 2,
          paddingHorizontal: 20,
          paddingVertical: 5,
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ color: colors.danger, marginRight: 10 }}>
          Cerrar sesión
        </Text>
        <MaterialCommunityIcons name='logout' size={20} color={colors.danger} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
