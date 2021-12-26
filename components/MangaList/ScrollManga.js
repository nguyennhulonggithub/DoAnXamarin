import React, { Component, useEffect, useRef, useState } from "react";
import { Animated, ScrollView, StyleSheet, Text, View } from "react-native";
import MangaTag from "./MangaTag";

export default function ScrollManga(props) {
  const listViewRef = useRef();

  const data = [
    {
      name: "Action",
      array: [
        { count_chapter: 44, time_update: "On going", status: "New", key: 0 },
        { count_chapter: 45, time_update: "On going", status: "New", key: 1 },
        {
          count_chapter: 46,
          time_update: "Update Weekly",
          status: "Hot",
          key: 2,
        },
        {
          count_chapter: 22,
          time_update: "Update Weekly",
          status: "Hot",
          key: 3,
        },
      ],
      key: 0,
    },
    {
      name: "Advanture",
      array: [
        {
          count_chapter: 49,
          time_update: "Update Weekly",
          status: "Hot",
          key: 4,
        },
        { count_chapter: 434, time_update: "On going", status: "New", key: 5 },
        { count_chapter: 43, time_update: "On going", status: "New", key: 6 },
      ],
      key: 1,
    },
    {
      name: "Fantasy",
      array: [
        { count_chapter: 441, time_update: "On going", status: "New", key: 7 },
        { count_chapter: 41, time_update: "On going", status: "New", key: 8 },
        { count_chapter: 33, time_update: "On going", status: "New", key: 9 },
        { count_chapter: 33, time_update: "On going", status: "New", key: 10 },
      ],
      key: 2,
    },
  ];

  return <View></View>;
}

const styles = StyleSheet.create({
  small_highlight: {
    fontSize: 18,
    color: "#a6a6a6",
    fontWeight: "500",
    lineHeight: 22,
  },
  bold_line: {
    height: 1,
    opacity: 1,
  },
});
