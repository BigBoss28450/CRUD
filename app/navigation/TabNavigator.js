import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListNavigator from "./ListNavigator";
import UserProfileScreen from "../screens/UserProfileScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: colors.blue }}>
      <Tab.Screen
        name='List'
        component={ListNavigator}
        tabBarOptions={{ activeTintColor: colors.blue }}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='format-list-bulleted-square'
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={UserProfileScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' size={25} color={color} />
          ),
          tabBarOptions: { activeTintColor: colors.blue },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
