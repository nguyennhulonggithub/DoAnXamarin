import React, { useRef, useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Button,
  Pressable,
} from "react-native";

import Header from "../components/MangaScreen/Header";
import { Color } from "../variable/Color";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Font } from "../variable/Font";
import axios from "axios";
import { server } from "../variable/ServerName";
import ContainerBody from "../components/MangaScreen/ContainerBody";

export default function MangaScreen({ route, navigation }) {
  const [dataHeader, set_dataHeader] = useState([]);
  const [dataBody, set_dataBody] = useState([]);
  useEffect(() => {
    axios.get(server + "/manga/" + route.params.idManga).then((res) => {
      set_dataHeader(res.data[0][0]);
    });
    axios
      .get(server + "/manga/" + route.params.idManga + "/chapter")
      .then((res) => {
        set_dataBody(res.data);
      });
    return;
  }, []);

  const ref = useRef(new Animated.Value(0)).current;
  const translation = ref.interpolate({
    inputRange: [0, 232],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const translateTitle = ref.interpolate({
    inputRange: [230, 232, 9999],
    outputRange: [0, 1, 1],
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
        <Pressable onPress={() => navigation.pop()}>
          <Ionicons name='chevron-back' size={24} color={Color.white} />
        </Pressable>
        <Animated.View
          style={{
            width: 270,
            alignItems: "center",
            opacity: translateTitle,
          }}
        >
          <Text style={Font.baseTitle} numberOfLines={1}>
            {dataHeader.Name}
          </Text>
        </Animated.View>
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

      <Header data={dataHeader} count_chapter={dataBody.length} />
      <ContainerBody
        data={dataBody}
        status={dataHeader.Status}
        summary={dataHeader.Summary}
        like={dataHeader.Likes}
        subscribe={dataHeader.Subscribes}
        read={dataHeader.TotalView}
        translate={translateTab}
        mangaTitle={dataHeader.Name}
        navigation={navigation}
      />
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
