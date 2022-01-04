import React, { useState } from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";

import { Font } from "../../variable/Font";
import { server } from "../../variable/ServerName";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../../variable/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function MangaTag(props) {
  function description() {
    if (props.save) {
      return (
        <View style={styles.containerDescription}>
          <MaterialCommunityIcons name='crown' size={18} color={Color.purple} />
          <Text style={[styles.description, { color: Color.purple }]}>
            SAVE {props.save}%
          </Text>
        </View>
      );
    } else if (props.new != 1) {
      if (props.hot) {
        return (
          <View style={styles.containerDescription}>
            <Ionicons name='ios-book-outline' size={18} color={Color.green} />
            <Text style={[styles.description, { color: Color.green }]}>
              NEW
            </Text>
            <View style={styles.circle} />
            <Text style={[styles.description, { color: Color.button }]}>
              HOT
            </Text>
          </View>
        );
      } else {
        return (
          <View style={styles.containerDescription}>
            <Ionicons name='ios-book-outline' size={15} color={Color.green} />
            <Text style={[styles.description, { color: Color.green }]}>
              NEW
            </Text>
          </View>
        );
      }
    } else if (props.hot) {
      return (
        <Text
          style={[styles.description, { color: Color.button, marginLeft: 0 }]}
        >
          HOT
        </Text>
      );
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
      <Text style={[Font.description, { marginTop: 10 }]}>
        {props.count_chapter} chapters
      </Text>
      <Text style={[Font.description, { marginTop: 2 }]}>{props.status}</Text>
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
  },
  //title của manga
  description: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: "700",
  },
  circle: {
    backgroundColor: Color.gray,
    height: 4,
    width: 4,
    borderRadius: 2,
    marginLeft: 5,
  },
  containerDescription: { flexDirection: "row", alignItems: "center" },
});

export default MangaTag;
