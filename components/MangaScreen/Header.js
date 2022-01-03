import React, { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";

import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import { server } from "../../variable/ServerName";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
function Header({ image, name, like, view, count_chapter }) {
  return (
    <View style={{ backgroundColor: Color.mangaColor }}>
      {/* header chứa cover manga, thông tin manga */}
      <View style={styles.header}>
        <Image
          source={{ uri: server + image }}
          style={styles.mangaCover}
        ></Image>
        <View style={styles.mangaInfo}>
          <Text style={Font.title}>{name}</Text>
          <Text style={Font.description}>By Shirahama Kamome</Text>
          <Text style={Font.description}>Fantasy</Text>
          <Text style={Font.description}>{count_chapter} chapters</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <FontAwesome5 name='readme' size={18} color={Color.white} />
            <Text style={[Font.baseTitle, { marginHorizontal: 10 }]}>
              {view}
            </Text>
            <AntDesign name='like1' size={18} color='white' />
            <Text style={[Font.baseTitle, { marginHorizontal: 10 }]}>
              {like}
            </Text>
          </View>
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
