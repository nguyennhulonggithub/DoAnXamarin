import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
export default function Stats({ color, iconName, source }) {
  return (
    <View style={[styles.circle, { backgroundColor: color }]}>
      {source == "awesome5" ? (
        <FontAwesome5 name={iconName} size={18} color='white' />
      ) : (
        <AntDesign name={iconName} size={18} color='white' />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  circle: {
    width: 34,
    height: 34,

    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
});
