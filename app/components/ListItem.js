import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import AppIconButton from "./AppIconButton";

export default function ListItem({ id, fullName }) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 5,
            marginRight: 15,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.blue,
          }}
        >
          <Text style={{ fontWeight: "bold", color: colors.white }}>{id}</Text>
        </View>
        <Text>{fullName}</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <AppIconButton
          icon='pencil-outline'
          onPress={() => console.log("Hola")}
          iconColor={colors.blue}
        />
        <AppIconButton
          icon='trash-can-outline'
          onPress={() => console.log("Hola")}
          iconColor={colors.danger}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
