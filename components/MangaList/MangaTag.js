import React, { useState } from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";

import { Font } from "../../variable/Font";
import { server } from "../../variable/ServerName";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../../variable/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Circle from "../AllScreen/Circle";
import New from "../AllScreen/New";
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
    } else if (props.new) {
      if (props.hot) {
        return (
          <View style={styles.containerDescription}>
            <New status={props.status} />
            <Circle />
            <Text
              style={[
                styles.description,
                { color: Color.button, marginLeft: 0 },
              ]}
            >
              HOT
            </Text>
          </View>
        );
      } else {
        return <New status={props.status} />;
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
