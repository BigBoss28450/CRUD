import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UsersListScreen from "../screens/UsersListScreen";
import AppIconButton from "../components/AppIconButton";
import colors from "../config/colors";
import UserFormScreen from "../screens/UserFormScreen";

const Stack = createStackNavigator();

export default function ListNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='List'
        component={UsersListScreen}
        options={({ navigation }) => ({
          title: "Usuarios",
          headerRight: () => (
            <View style={{ paddingHorizontal: 20 }}>
              <AppIconButton
                icon='account-plus'
                iconColor={colors.blue}
                onPress={() => navigation.navigate("Form")}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen name='Form' component={UserFormScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
