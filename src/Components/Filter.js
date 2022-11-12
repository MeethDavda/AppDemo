import { View, Text } from "react-native";
import React from "react";

const Filter = () => {
  return (
    <View>
      <View className="m-5 bg-slate-000 h-12">
        <View className="bg-slate-100 w-24 ml-2 rounded-lg items-center h-10 border-2 ">
          <Text className="text-2xl leading-8 font-light">Filter</Text>
        </View>
      </View>
    </View>
  );
};

export default Filter;
