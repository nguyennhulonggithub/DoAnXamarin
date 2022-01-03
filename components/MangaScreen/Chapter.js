import React, { useRef } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { set_height_chapter } from "../../redux/actions";
import { useEffect } from "react";
import Chaps from "../AllScreen/Chaps";
import { useState } from "react";

export default function Chapter({
  data,
  index,
  navigation,
  status,
  mangaTitle,
}) {
  const dispatch = useDispatch();

  const [reverse, set_reverse] = useState(false);
  const cur_height = useRef(0);
  function set_height_onPress() {
    dispatch(set_height_chapter(cur_height.current));
  }

  useEffect(() => {
    if (index == 0) {
      set_height_onPress();
    }
  }, [index]);

  return (
    <View
      onLayout={(event) => {
        dispatch(set_height_chapter(event.nativeEvent.layout.height));
        cur_height.current = event.nativeEvent.layout.height;
      }}
      style={{ paddingTop: 50 }}
    >
      <View style={styles.container_header}>
        <View style={{ justifyContent: "center" }}>
          <Text style={Font.baseTitle}>{data.length} chapters</Text>
          <Text style={Font.description}>{status}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name='ios-notifications-circle-outline'
            size={24}
            color={Color.white}
          />
          <Pressable
            onPress={() => set_reverse(!reverse)}
            style={styles.reverse}
          >
            <FontAwesome
              name='long-arrow-up'
              size={15}
              color={reverse ? Color.gray : "white"}
            />
            <FontAwesome
              name='long-arrow-down'
              size={15}
              color={reverse ? "white" : Color.gray}
            />
          </Pressable>
        </View>
      </View>

      <Chaps
        data={data}
        mangaTitle={mangaTitle}
        navigation={navigation}
        reverseBoolean={reverse}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container_header: {
    height: 80,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    flexDirection: "row",
  },
  reverse: {
    flexDirection: "row",
    marginHorizontal: 10,
    backgroundColor: Color.onBaseColor,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
