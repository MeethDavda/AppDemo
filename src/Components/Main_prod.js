import { View, Text } from "react-native";
import React from "react";

const Main_prod = () => {
  return (
    <View className="flex flex-row justify-center content-center ">
      <View className="w-[90%] bg-slate-000 flex flex-row  content-center my-4">
        <View className="w-28 h-28 bg-slate-300  rounded-lg "></View>

        <View className=" ml-6 bg-slate-000 w-[60%]">
          <Text className="text-2xl font-normal ">Product Name</Text>
          <Text className="font-light text-lg ">Rs. 1000.00</Text>
          <View className="flex flex-row ">
            <Text className="text-4xl">* * * * *</Text>
            <Text className="font-extralight ml-4 leading-6">10 Ratings</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Main_prod;
