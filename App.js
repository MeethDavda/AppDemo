import React from "react";
import { View } from "react-native";
import Login from "./src/Pages/Login";
import Main from "./src/Pages/Main";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import Product from "./src/Pages/Product";
import Checkout from "./src/Pages/Checkout";

export default function App() {
  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <View>
          {/* <Login /> */}
          {/* <Main /> */}
          {/* <Product /> */}
          <Checkout />
        </View>
      </ApplicationProvider>
    </>
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
