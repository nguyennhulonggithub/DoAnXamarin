import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";
import { Color } from "../../variable/Color";

import { Font } from "../../variable/Font";

function BigManga(props) {
  const { time_update, count_chapter, status, scroll_Pallax, index } = props;
  // const { index, scroll_Pallax, status, time_update, count_chapter } = props;

  const translation = scroll_Pallax.interpolate({
    inputRange: [(index - 1) * 280, index * 280, (index + 1) * 280],
    outputRange: [-45, 0, 45],
    extrapolate: "clamp",
  });
  return (
    <Pressable style={styles.viewManga}>
      <View style={styles.cover_manga}>
        <Animated.Image
          style={[styles.manga, { transform: [{ translateX: translation }] }]}
          source={require("../../assets/home/home-manga-1.jpg")}
        />
      </View>
      <View style={styles.text_inside}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={[Font.base_description, { color: "black" }]}>
            {count_chapter} Chapters
          </Text>
          <View
            style={{
              height: 5,
              width: 5,
              marginHorizontal: 5,
              marginTop: 5,
              borderRadius: 2.5,
              backgroundColor: "white",
            }}
          ></View>
          <Text style={[Font.base_description, { color: "black" }]}>
            {time_update}
          </Text>
        </View>
        <Text style={[Font.baseTitle, styles.status_text]}>{status}</Text>
      </View>
    </Pressable>
  );
}

//style sheet
const styles = StyleSheet.create({
  viewManga: {
    height: 350,
    width: 280,
    backgroundColor: Color.defaultColor,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  cover_manga: {
    width: 250,
    height: 350,

    alignItems: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
  manga: {
    height: 350,
    width: 300,
    resizeMode: "cover",
  },
  text_inside: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 100,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  status_text: {
    marginTop: 8,
    paddingHorizontal: 3,
    borderColor: Color.baseColor,
    borderRadius: 5,
    borderWidth: 1,
    color: "black",
    fontWeight: "700",
  },
});

export default BigManga;
