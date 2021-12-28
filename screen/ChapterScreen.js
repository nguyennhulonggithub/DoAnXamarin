import axios from "axios";
import React from "react";

import { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  Text,
  useWindowDimensions,
  Dimensions,
  ScrollView,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";

import { server } from "../variable/ServerName";

export default function ChapterScreen() {
  const [data, setdata] = useState([]);
  const windowWidth = Dimensions.get("window").width;

  useEffect(() => {
    axios.get(server + "/chapter/10").then((res) => setdata(res.data));
    return;
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={(evt) => console.log(evt.nativeEvent.locationY)}
      >
        <Image
          source={{ uri: server + item.imgUrl }}
          style={{
            width: windowWidth,
            height: (windowWidth * item.height) / item.width,
          }}
          fadeDuration={0}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => item.key}
      renderItem={renderItem}
      onScroll={(e) => console.log(e.nativeEvent.contentOffset.y)}
      maxToRenderPerBatch={60} // Reduce number in each render batch
    />
  );
}
