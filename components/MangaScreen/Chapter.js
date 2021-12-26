import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Font } from "../../variable/Font";
import MangaTag from "../MangaList/MangaTag";

function Chapter() {
  return <Text>hello</Text>;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  mangaCover: {
    height: 200,
    width: 150,
    borderRadius: 10,
    marginTop: 80,
  },
});

export default Chapter;
