import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Font } from "../../variable/Font";
import { Feather } from "@expo/vector-icons";
export default function SimilarTitle({ title, genre, read, status }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/home/home-banner.png")}
      />
      <View style={{ marginLeft: 15, justifyContent: "space-evenly" }}>
        <Text style={Font.baseTitle}>{title}</Text>
        <Text style={Font.description}>{genre}</Text>
        <Text style={Font.description}>{read}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name='book-open' size={24} color='green' />
          <Text
            style={[
              Font.baseTitle,
              { color: "green", fontWeight: "700", marginLeft: 5 },
            ]}
          >
            {status}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: { height: 120, width: 80, resizeMode: "cover", borderRadius: 5 },
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
});
