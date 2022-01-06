import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../variable/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function SaveStatus({ save }) {
  return (
    <View style={styles.containerDescription}>
      <MaterialCommunityIcons
        name='crown'
        size={18}
        color={Color.purple}
        style={{ marginRight: 5 }}
      />
      <Text style={styles.description}>SAVE {save}%</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  containerDescription: { flexDirection: "row", alignItems: "center" },
  description: {
    fontSize: 15,
    fontWeight: "700",
    color: Color.purple,
  },
});
