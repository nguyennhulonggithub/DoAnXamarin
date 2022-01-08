import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { server } from "../../variable/ServerName";

function GenreTag({ image, name, navigation }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("GenreScreen")}
    >
      <Image source={{ uri: server + image }} style={styles.img}></Image>
      <Text style={styles.genreTitle} adjustsFontSizeToFit={true}>
        {name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "43%",
    marginBottom: 20,
  },
  img: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    resizeMode: "cover",
    height: 120,
  },

  genreTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    textAlignVertical: "center",
    width: "100%",
    backgroundColor: "#257F7D",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: 40,
  },
});

export default GenreTag;
