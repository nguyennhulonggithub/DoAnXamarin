import React, { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";

function Header() {
  return (
    <View>
      {/* thanh control chứa comment, điều hướng */}
      <View style={styles.control}>
        <Ionicons name='arrow-back-circle' size={36} color='#262626' />
        <MaterialCommunityIcons
          name='dots-vertical-circle'
          size={36}
          color='#262626'
        />
      </View>

      {/* header chứa cover manga, thông tin manga */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/home/home-manga-1.jpg")}
          style={styles.mangaCover}
        ></Image>
        <View style={styles.mangaInfo}>
          <Text style={Font.title}>Witch Hat Atelier</Text>
          <Text style={Font.description}>By Shirahama Kamome</Text>
          <Text style={Font.description}>Fantasy</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  control: {
    backgroundColor: "white",
    height: 40,
    backgroundColor: "#191815",
  },
  header: {
    backgroundColor: "#191815",
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  mangaCover: {
    height: 200,
    width: 140,
    borderRadius: 10,
    marginTop: 50,
  },
  mangaInfo: {
    position: "absolute",
    left: 180,
    top: 50,
    width: 200,
  },
});

export default Header;
