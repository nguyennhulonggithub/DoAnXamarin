import axios from "axios";
import React from "react";
import { useRef } from "react";

import { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import { Color } from "../variable/Color";

import { server } from "../variable/ServerName";

export default function ChapterScreen() {
  const [data, setdata] = useState([]);
  const windowWidth = Dimensions.get("window").width;
  const scrollItem = useRef();
  const [itemHeights, set_itemHeights] = useState([]);
  useEffect(() => {
    axios.get(server + "/chapter/10").then((res) => {
      setdata(res.data);
      let array = [];
      res.data.forEach((element) => {
        array.push(
          Math.floor((windowWidth * element.height) / element.width) + 15
        );
      });
      set_itemHeights(array);
    });
    return;
  }, []);

  const renderItem = ({ item, index }) => {
    const _height = itemHeights[index] - 15;
    console.log(_height);
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          scrollItem.current.scrollToIndex({
            index: index - 1,
            viewPosition: 0.5,
          });
        }}
      >
        <Image
          source={{ uri: server + item.imgUrl }}
          style={{
            width: windowWidth,
            height: _height ? _height : 0,
          }}
          fadeDuration={0}
        />
      </TouchableWithoutFeedback>
    );
  };
  const renderSeparator = () => <View style={styles.separator} />;
  const getItemLayout = (data, index) => {
    let length = itemHeights[index];
    const offset = itemHeights.slice(0, index).reduce((a, c) => a + c, 0);
    if (!length) {
      length = 0;
    }
    return { length, offset, index };
  };

  return (
    <FlatList
      ItemSeparatorComponent={renderSeparator}
      showsVerticalScrollIndicator={false}
      ref={scrollItem}
      data={data}
      keyExtractor={(item, index) => item.key}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      maxToRenderPerBatch={60} // Reduce number in each render batch
    />
  );
}
const styles = StyleSheet.create({
  separator: {
    backgroundColor: Color.defaultColor,
    height: 15,
  },
});
