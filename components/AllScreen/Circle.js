import React from "react";
import { View, StyleSheet } from "react-native";
import { Color } from "../../variable/Color";

export default function Circle() {
  return <View style={styles.circle} />;
}
const styles = StyleSheet.create({
  circle: {
    backgroundColor: Color.gray,
    height: 4,
    width: 4,
    borderRadius: 2,
    marginLeft: 5,
    marginRight: 5,
  },
});
