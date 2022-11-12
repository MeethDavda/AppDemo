import {
  View,
  Text,
  ScrollView,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

const Product = () => {
  return (
    <View>
      <ScrollView>
        <View className="w-full h-80 mt- bg-slate-300  rounded-br-[35px] rounded-bl-[35px] ">
          <Pressable className="mt-10 ml-5">
            <Text className="text-lg ">Back</Text>
          </Pressable>
        </View>
        <View className="ml-5 mt-3  w-[90%]">
          <Text className="text-4xl font-semibold ">Product Name</Text>

          <View className="flex flex-row">
            <Text className="font-light text-base ">4.5</Text>
            <Text className="text-4xl mx-2">* * * * </Text>
            <Text className="leading-6 text-base font-light">10 Reviews</Text>
          </View>

          <Text className="leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia
            consectetur reiciendis adipisci aut autem quos? Unde eos ut
            recusandae!
          </Text>

          <View className="mt-4 flex flex-row justify-between mb-4">
            <View className="flex flex-col">
              <Text className="text-2xl font-semibold">Size</Text>
              <View className="flex flex-row gap-6 ">
                <View className="flex flex-row gap-6 bg-slate-000">
                  <Button title="S" />
                  <Button title="M" />
                  <Button title="L" />
                </View>
              </View>
            </View>

            <View>
              <Text className="text-2xl font-semibold">Colors</Text>
              <View className="flex flex-row gap-6 ">
                <View className="flex flex-row gap-6 bg-slate-000">
                  <Button title="S" />
                  <Button title="M" />
                  <Button title="L" />
                </View>
              </View>
            </View>
          </View>

          <View className="flex flex-row justify-between">
            <Text className="text-3xl font-semibold">Rs.1000.00</Text>

            <View className="flex flex-row gap-4">
              <Text className="text-2xl font-medium ">-</Text>
              <Text className="text-2xl font-medium ">1</Text>
              <Text className="text-2xl font-medium ">+</Text>
            </View>
          </View>

          <View className="mt-4 flex flex-col">
            <Text className="text-xl">Apply Coupon Code</Text>
            <TextInput
              className="h-10 mt-2  bg-slate-000 border-2 rounded-md"
              placeholder="Type"
            />
          </View>

          {/* <View className="flex justify-center items-center bg-slate-300 mt-8 h-16 rounded-2xl">
            <View>
              <Text className="text-2xl">Add to Cart</Text>
            </View>
          </View> */}

          <Pressable className="h-16 mt-8 rounded-2xl bg-slate-300 flex justify-center items-center">
            <Text className="text-2xl">Add to Cart</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Product;
