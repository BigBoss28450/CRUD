import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import AppIconButton from "../components/AppIconButton";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function UsersListScreen() {
  const users = useSelector((state) => state.users.userList);
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        contentContainerStyle={{ padding: 20 }}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            fullName={`${item.first_name} ${item.last_name}`}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
