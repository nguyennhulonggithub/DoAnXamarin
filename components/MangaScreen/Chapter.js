import React, { useRef } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { set_height_chapter } from "../../redux/actions";
import { useEffect } from "react";

export default function Chapter({ data, index, navigation }) {
  const dispatch = useDispatch();
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
          <Text style={Font.description}>Update Weekly</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name='ios-notifications-circle-outline'
            size={24}
            color={Color.white}
          />
          <FontAwesome
            name='exchange'
            size={15}
            color={Color.white}
            style={{ marginHorizontal: 10, transform: [{ rotate: "90deg" }] }}
          />
        </View>
      </View>

      {data.map((item) => {
        return (
          <Pressable
            key={item.key}
            onPress={() => navigation.navigate("ChapterScreen")}
          >
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require("../../assets/genre/action.png")}
              />
              <View style={styles.DetailContainer}>
                <Text style={Font.baseTitle}>{item.name}</Text>
                <Text style={Font.baseTitle}>{item.status}</Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <View style={styles.line}></View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  container_header: {
    height: 80,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    flexDirection: "row",
  },
  DetailContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 280,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  image: {
    height: 80,
    width: 100,
    marginLeft: 15,
  },
  line: {
    width: 280,
    height: 1,
    backgroundColor: Color.white,
    opacity: 0.1,
  },
});
