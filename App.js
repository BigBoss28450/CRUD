import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/navigation/TabNavigator";
import { apiBaseUrl } from "./app/api/apiBaseUrl";
import { useDispatch } from "react-redux";
import { addUsers } from "./app/redux/actions/users";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  // REDUX
  const dispatch = useDispatch();

  // FUNCTIONS
  const getUsers = async () => {
    for (let i = 1; i <= 2; i++) {
      const result = await apiBaseUrl.get(`/api/users?page=${i}`);
      dispatch(addUsers(result.data.data));
    }
  };

  const prepareResources = async () => {
    await getUsers();
    await SplashScreen.hideAsync();
  };
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    prepareResources();
  }, []);
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
