import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Font } from "../../variable/Font";
import MangaTag from "../MangaList/MangaTag";

export default class Details extends Component {
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Text>hello</Text>
      </ScrollView>
    );
  }
}
