import React, { useState } from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { Color } from "../../variable/Color";

import { Font } from "../../variable/Font";

function NewRelease(props) {
  return (
    <Pressable style={styles.viewManga}>
      <Text style={[Font.baseTitle, { marginTop: 10 }]}>{props.index}</Text>
      <Image
        style={styles.manga}
        source={require("../../assets/home/home-manga-1.jpg")}
      />

      <View style={{ justifyContent: "center", width: 160 }}>
        <Text style={[Font.baseTitle, { marginTop: 10 }]}>{props.name}</Text>
        <Text style={[Font.description, { marginTop: 2 }]}>
          {props.view} reads
        </Text>
        <Text style={[Font.description, { marginTop: 2 }]}>{props.date}</Text>
        <Text style={{ fontSize: 15, fontWeight: "700", color: "yellow" }}>
          {props.status}
        </Text>
      </View>
    </Pressable>
  );
}

//style sheet
const styles = StyleSheet.create({
  //view bọc ngoài thumbnail của manga
  viewManga: {
    height: 170,
    width: 350,
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 10,
    backgroundColor: Color.baseColor,
  },
  //thumbnail của manga trong list
  manga: {
    height: 150,
    width: 100,
    resizeMode: "cover",
    borderRadius: 10,
    marginHorizontal: 15,
  },
  //title của manga
});

export default NewRelease;
