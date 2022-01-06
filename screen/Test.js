import React, { useRef } from "react";
import { useEffect } from "react";
import { View, Image, Animated, StyleSheet, Dimensions } from "react-native";
import images from "../components/SearchScreen/Banner";
import { Color } from "../variable/Color";

export default function Test() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];

  const rows = array.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return <View></View>;
}
