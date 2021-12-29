import React from "react";
import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Font } from "../variable/Font";

export default function Test() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["#050505", "#403f3f", "rgba(52, 52, 52, 0.8)"]}
        style={{
          width: "100%",
          height: 200,
          position: "absolute",
          top: 0,
          opacity: 0.95,
        }}
      />

      <Pressable
        style={{
          height: 500,
          width: "100%",
          zIndex: 1,
        }}
        onPress={() => console.log("hello")}
      >
        <Pressable
          onPress={() => {
            console.log("hi");
          }}
          style={{
            position: "absolute",
            top: 70,
            left: 20,
            zIndex: 10,
          }}
        >
          <Text style={Font.title}>Hello world</Text>
          <Text style={Font.baseTitle}>Hello world</Text>
        </Pressable>
        <Text style={[Font.title]}>hello world</Text>
      </Pressable>
    </View>
  );
}
