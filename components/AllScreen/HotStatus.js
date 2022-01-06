import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../variable/Color";

export default function HotStatus() {
  return <Text style={styles.description}>HOT</Text>;
}
const styles = StyleSheet.create({
  description: {
    fontSize: 15,
    fontWeight: "700",
    color: Color.button,
  },
});
