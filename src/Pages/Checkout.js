import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import Main_prod from "../Components/Main_prod";

const Checkout = () => {
  return (
    <View className="flex items-center mt-10">
      <View className="h-full w-[88%] ">
        <Pressable>
          <Text className="text-lg ">Back</Text>
        </Pressable>
        <Text className=" text-3xl font-semibold mt-4">My Cart</Text>
        <View className="flex-1">
          <ScrollView>
            <Main_prod />
            <Main_prod />

            <View>
              <Text className="text-xl font-medium">Delivery Location</Text>
              <Text className="leading-5 font-light mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                nobis.
              </Text>
            </View>

            <View>
              <Text className="text-xl font-medium mt-4">Payment Method</Text>
              <Text className="text-base font-light mt-2">Example</Text>
            </View>

            <View>
              <Text className="font-semibold text-3xl mt-4">Order Info</Text>
              <View className="flex flex-col mt-2">
                <View className="flex flex-row justify-between">
                  <Text className="text-lg font-light">Subtotal</Text>
                  <Text className="text-lg font-light">Rs.1000.00</Text>
                </View>

                <View className="flex flex-row justify-between">
                  <Text className="text-lg font-light">Shipping Cost</Text>
                  <Text className="text-lg font-light">Rs.50.00</Text>
                </View>

                <View className="flex flex-row justify-between">
                  <Text className="text-lg ">Total</Text>
                  <Text className="text-lg ">Rs.1050.00</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <Pressable className="h-16 mb-10 rounded-2xl bg-slate-300 flex justify-center items-center">
            <Text className="text-2xl">Checkout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Checkout;
