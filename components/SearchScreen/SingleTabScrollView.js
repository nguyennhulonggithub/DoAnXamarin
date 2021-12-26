import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { TabBarItem } from "react-native-tab-view";
import { Font } from "../../variable/Font";
import MangaTag from "../MangaList/MangaTag";

export default function SingleTabScrollView({ data }) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {data.map((item) => {
        return (
          <MangaTag
            key={item.key}
            count_chapter={item.count_chapter}
            status={item.status}
            time_update={item.time_update}
          />
        );
      })}
    </ScrollView>
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
