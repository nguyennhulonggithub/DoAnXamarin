import React, { useRef } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";

import Header from "../components/MangaScreen/Header";
import Body from "../components/MangaScreen/Body";
import { Color } from "../variable/Color";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 1",
    status: "free",
    key: 1,
  },
  {
    image: "../../assets/genre/romance.png",
    name: "Chapter 2",
    status: "free",
    key: 2,
  },
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 3",
    status: "paid",
    key: 3,
  },
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 1",
    status: "free",
    key: 4,
  },
  {
    image: "../../assets/genre/romance.png",
    name: "Chapter 2",
    status: "free",
    key: 5,
  },
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 3",
    status: "paid",
    key: 6,
  },
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 1",
    status: "free",
    key: 7,
  },
  {
    image: "../../assets/genre/romance.png",
    name: "Chapter 2",
    status: "free",
    key: 8,
  },
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 3",
    status: "paid",
    key: 9,
  },
];
export default function MangaScreen({ navigation }) {
  const ref = useRef(new Animated.Value(0)).current;
  const translation = ref.interpolate({
    inputRange: [0, 232],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const translateTab = ref.interpolate({
    inputRange: [232, 5000],
    outputRange: [0, 4770],
    extrapolate: "clamp",
  });
  return (
    <Animated.ScrollView
      style={{ backgroundColor: Color.baseColor }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: ref } } }],
        { useNativeDriver: true }
      )}
    >
      {/* thanh control chứa comment, điều hướng */}
      <Animated.View
        style={[
          styles.control_background,
          { transform: [{ translateY: ref }], opacity: translation },
        ]}
      ></Animated.View>
      <Animated.View
        style={[styles.control, { transform: [{ translateY: ref }] }]}
      >
        <Ionicons name='chevron-back' size={24} color={Color.white} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name='comment-processing-outline'
            size={20}
            color={Color.white}
          />
          <Entypo
            name='dots-three-horizontal'
            size={20}
            color={Color.white}
            style={{ marginHorizontal: 15 }}
          />
        </View>
      </Animated.View>

      <Header />
      <View
        style={{
          height: 50 + useSelector((state) => state.height),
          width: "100%",
        }}
      >
        <Body data={data} translate={translateTab} />
      </View>
    </Animated.ScrollView>
  );
}
const styles = StyleSheet.create({
  control: {
    paddingTop: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",

    top: 0,
    height: 80,
    width: "100%",
    zIndex: 10,
  },
  control_background: {
    height: 80,
    backgroundColor: Color.mangaColor,
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 5,
  },
});
