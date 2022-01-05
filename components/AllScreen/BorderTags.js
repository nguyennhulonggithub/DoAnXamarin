import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import New from "./New";

export default function BorderTags({ data, status }) {
  return (
    <View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {data.map((item, index) => {
          if (item == "New") {
            return (
              <View key={index} style={styles.containerNew}>
                <New status={status} />
              </View>
            );
          } else if (item == "Hot") {
            return (
              <View key={index} style={styles.containerHot}>
                <Text style={styles.hot}>HOT</Text>
              </View>
            );
          }
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tag: {
    padding: 2,
    borderColor: Color.baseColor,
    borderWidth: 2,
    borderRadius: 5,
  },
  containerNew: {
    borderColor: Color.gray,
    borderWidth: 0.8,
    borderRadius: 15,
    marginRight: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  containerHot: {
    borderColor: Color.gray,
    borderWidth: 0.8,
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingTop: 3,
    paddingBottom: 4,
  },
  hot: {
    fontSize: 15,
    color: Color.button,
    fontWeight: "700",
  },
});
