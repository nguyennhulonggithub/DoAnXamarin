import React, { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";

import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import { server } from "../../variable/ServerName";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Circle from "../AllScreen/Circle";
function Header({ data, count_chapter }) {
  const { ImageAPI, Likes, Name, TotalView, Author, Genre } = data;
  let dataGenre = [];
  if (Genre) {
    dataGenre = Genre.split(",");
  }

  return (
    <View style={{ backgroundColor: Color.mangaColor }}>
      {/* header chứa cover manga, thông tin manga */}
      <View style={styles.header}>
        <Image
          source={{ uri: server + ImageAPI }}
          style={styles.mangaCover}
        ></Image>
        <View style={styles.mangaInfo}>
          <Text style={Font.title}>{Name}</Text>
          <Text style={Font.description}>By {Author}</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              width: 220,
            }}
          >
            {dataGenre.map((item, index) => {
              if (index != dataGenre.length - 1) {
                return (
                  <View
                    key={index}
                    style={{ alignItems: "center", flexDirection: "row" }}
                  >
                    <Text style={Font.description}>{item}</Text>
                    <Circle />
                  </View>
                );
              }
              return (
                <View
                  key={index}
                  style={{ alignItems: "center", flexDirection: "row" }}
                >
                  <Text style={Font.description}>{item}</Text>
                </View>
              );
            })}
          </View>
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
              {TotalView}
            </Text>
            <AntDesign name='like1' size={18} color='white' />
            <Text style={[Font.baseTitle, { marginHorizontal: 10 }]}>
              {Likes}
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
