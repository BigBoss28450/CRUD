import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import AppLogoutButton from "../components/AppLogoutButton";
import AppSpinner from "../components/AppSpinner";
import colors from "../config/colors";

export default function UserProfileScreen() {
  // REDUX
  const users = useSelector((state) => state.users.userList);

  // STATE
  const [spinnerVisible, setSpinnerVisible] = useState(false);

  // FUNCTIONS
  const logout = () => {
    setSpinnerVisible(true);
    setTimeout(() => {
      setSpinnerVisible(false);
      Alert.alert(
        "Se ah cerrado la sesión",
        "",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: false }
      );
    }, 2000);
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={{ flex: 1 }}
    >
      <AppSpinner visible={spinnerVisible} />
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            source={{ uri: users[0].avatar }}
            style={{ width: 150, height: 150, borderRadius: 75 }}
          />
        </View>

        <Text
          style={{
            color: colors.white,
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 10,
          }}
        >{`${users[0].first_name} ${users[0].last_name}`}</Text>
        <Text style={{ color: colors.white }}>{users[0].email}</Text>
        <AppLogoutButton onPress={logout} />
        <View style={{ position: "absolute", bottom: 20, right: 20 }}>
          <Text style={{ color: colors.white }}>id: {users[0].id}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
