import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../../variable/Color";

export default function New({ status }) {
  return (
    <View style={styles.containerDescription}>
      {status != "Completed" && (
        <Ionicons
          name='ios-book-outline'
          size={15}
          color={Color.green}
          style={{ marginRight: 5 }}
        />
      )}
      <Text style={[styles.description, { color: Color.green }]}>NEW</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  //title của manga
  description: {
    fontSize: 15,
    fontWeight: "700",
  },
  containerDescription: { flexDirection: "row", alignItems: "center" },
});
