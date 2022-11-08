import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Login from "./src/Pages/Login";

export default function App() {
  return (
    <View className="items-center ">
      <View className=" mt-14 flex flex-col w-[90%] py-3 top-[60%] justify-between bg-slate-200 rounded-md">
        <Text className="mx-5 text-xl">Enter Username</Text>
        <TextInput className="p-2 my-2 border-2 border-green-600 w-[85%] ml-5 rounded-md">
          Name
        </TextInput>

        <Text className="mx-5 text-xl">Enter Email</Text>
        <TextInput className="p-2 my-2 border-2 border-green-600 w-[85%] ml-5 rounded-md">
          Email
        </TextInput>

        <Button title="Submit" />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
