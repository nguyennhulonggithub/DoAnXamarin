import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { TabBarItem } from "react-native-tab-view";
import { Font } from "../../variable/Font";
import MangaTag from "../MangaList/MangaTag";

export default function SingleTabScrollView({ data = [], navigation }) {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.idManga}
      renderItem={({ item }) => {
        return (
          <MangaTag
            idManga={item.idManga}
            image_api={item.ImageAPI}
            first_line={item.Chapter + " chapters"}
            second_line={item.Status}
            new={item.New}
            hot={item.Hot}
            save={item.Save}
            navigation={navigation}
          />
        );
      }}
      initialNumToRender={10}
      maxToRenderPerBatch={60}
    />
  );
}
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
