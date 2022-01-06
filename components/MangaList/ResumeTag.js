import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Font } from "../../variable/Font";

function ResumeTag() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/home/home-manga-2.jpg")}
        style={styles.img}
      ></Image>

      <View style={styles.detail}>
        <Text style={Font.title}>Dorohedoro</Text>
        <Text style={Font.description} numberOfLines={1}>
          Chapter 5: Killing Mushroom Chapter 5: Killing Mushroom
        </Text>
        <Text style={Font.description}>6% read</Text>
        <Text style={[Font.description, { marginTop: 10 }]}>6 days ago</Text>
      </View>

      {/* dấu 3 chấm hiện bảng tương tác với manga */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    borderRadius: 10,
    width: 350,
    height: 150,
    paddingHorizontal: 15,
    flexDirection: "row",
    marginLeft: 20,
  },
  img: {
    height: 120,
    width: 80,
    resizeMode: "cover",
  },
  detail: {
    paddingHorizontal: 15,
    width: 250,
  },
});

export default ResumeTag;
