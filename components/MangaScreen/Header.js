import React, { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";

import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";

function Header() {
  return (
    <View style={{ backgroundColor: Color.mangaColor }}>
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
  header: {
    paddingTop: 80,
    backgroundColor: Color.mangaColor,
    paddingBottom: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  mangaCover: {
    height: 200,
    width: 140,
    borderRadius: 10,
  },
  mangaInfo: {
    marginLeft: 20,
  },
});

export default Header;
