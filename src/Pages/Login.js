import React from "react";
import { Text, View, TextInput, Button } from "react-native";

function Login() {
  return (
    <View className="items-center flex flex-col">
      <View className=" mt-28 flex flex-col w-[90%] py-3 justify-between bg-slate-200 rounded-md">
        <Text className="mx-5 text-xl">Enter Username</Text>
        <TextInput className="p-2 my-2 border-2 border-green-400 w-[85%] ml-5 rounded-md">
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

export default Login;
