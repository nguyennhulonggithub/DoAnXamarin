import React, { useState } from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";

import { Font } from "../../variable/Font";
import { server } from "../../variable/ServerName";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../../variable/Color";

import Circle from "../AllScreen/Circle";
import New from "../AllScreen/New";
import Save from "../AllScreen/Save";
import Hot from "../AllScreen/Hot";
function MangaTag(props) {
  function description() {
    if (props.save) {
      return <Save save={props.save} />;
    } else if (props.new) {
      if (props.hot) {
        return (
          <View style={styles.containerDescription}>
            <New status={props.status} />
            <Circle />
            <Hot />
          </View>
        );
      } else {
        return <New status={props.status} />;
      }
    } else if (props.hot) {
      return <Hot />;
    }
  }
  return (
    <Pressable
      style={styles.viewManga}
      onPress={() => {
        props.navigation.navigate("MangaScreen", { idManga: props.idManga });
      }}
    >
      <Image
        style={styles.manga}
        source={{ uri: server + props.image_api }}
      ></Image>
      {props.first_line && (
        <Text style={Font.description}>{props.first_line}</Text>
      )}
      <Text style={[Font.description, { marginTop: 2 }]}>
        {props.second_line}
      </Text>
      <View style={{ flexDirection: "row", marginTop: 8 }}>
        {description()}
        {/* <Text style={Font.baseTitle}>{props.hot}</Text> */}
      </View>
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
    marginBottom: 10,
  },
  //title của manga
  description: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: "700",
  },

  containerDescription: { flexDirection: "row", alignItems: "center" },
});

export default MangaTag;
