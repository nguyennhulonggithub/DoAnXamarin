import React from "react";
import { View, Text } from "react-native";
import { Color } from "../../variable/Color";

export default function Line() {
  return (
    <View
      style={{
        width: "100%",
        height: 0.5,
        backgroundColor: Color.gray,
        opacity: 0.5,
      }}
    />
  );
}
