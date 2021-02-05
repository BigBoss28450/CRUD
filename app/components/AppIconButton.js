import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";

export default function AppIconButton({ icon, iconColor, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ marginHorizontal: 5 }}>
        <MaterialCommunityIcons name={icon} size={25} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
