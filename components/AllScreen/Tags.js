import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";

export default function Tags({ data }) {
  return (
    <View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {data.map((item) => {
          return <Text style={[Font.description, styles.tag]}>{item}</Text>;
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tag: {
    padding: 8,
    marginRight: 10,
    backgroundColor: Color.onBaseColor,
    borderRadius: 5,
  },
});
