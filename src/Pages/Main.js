import { View, Text, ScrollView } from "react-native";
import React from "react";
import Main_prod from "../Components/Main_prod";
import Filter from "../Components/Filter";

const Main = () => {
  return (
    <View className="flex-1">
      <Pressable>
        <Text className="text-lg ">Back</Text>
      </Pressable>
      <Filter />
      <ScrollView className="flex-1">
        <Main_prod />
        <Main_prod />
        <Main_prod />
        <Main_prod />
        <Main_prod />
        <Main_prod />
        <Main_prod />
        <Main_prod />
      </ScrollView>
    </View>
  );
};

export default Main;
