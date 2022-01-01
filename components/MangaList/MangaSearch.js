import React, { useState } from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";

import { Font } from "../../variable/Font";

function MangaSearch(props) {
  return (
    <Pressable
      style={styles.viewManga}
      onPress={() => {
        props.navigation.navigate("MangaScreen");
      }}
    >
      <Image
        style={styles.manga}
        source={require("../../assets/home/home-manga-1.jpg")}
      ></Image>
      <Text style={[Font.description, { marginTop: 10 }]}>
        {props.count_chapter}
      </Text>
      <Text style={[Font.description, { marginTop: 2 }]}>{props.time_add}</Text>
    </Pressable>
  );
}

//style sheet
const styles = StyleSheet.create({
  //view bọc ngoài thumbnail của manga
  viewManga: {
    height: 200,
    width: 155,
    paddingLeft: 15,

    borderRadius: 10,
    marginTop: 10,
  },
  //thumbnail của manga trong list
  manga: {
    height: 200,
    width: 140,
    resizeMode: "cover",
    borderRadius: 10,
  },
  //title của manga
});

export default MangaSearch;
