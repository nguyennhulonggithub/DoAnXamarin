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
  Pressable,
} from "react-native";
import { Color } from "../variable/Color";

import { server } from "../variable/ServerName";
import { Font } from "../variable/Font";
import Linear from "../components/ChapterScreen/Linear";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const top = windowHeight / 3;
const bottom = (windowHeight / 3) * 2;

export default function ChapterScreen() {
  const [data, setdata] = useState([]);
  const refLinear = useRef();
  const scrollItem = useRef();
  const [itemHeights, set_itemHeights] = useState([]);
  const length = itemHeights.length - 1;
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

    return (
      <TouchableWithoutFeedback
        onPress={(evt) => {
          scrollFlatlist(evt.nativeEvent.pageY, index);
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
  const scrollFlatlist = (press_pos, index) => {
    if (press_pos < top && index > 0) {
      scrollItem.current.scrollToIndex({
        index: index - 1,
        viewPosition: 0.5,
      });
    } else if (press_pos > bottom && index < length) {
      scrollItem.current.scrollToIndex({
        index: index + 1,
        viewPosition: 0.5,
      });
    } else {
      refLinear.current.setLinear();
    }
  };

  return (
    <View>
      <FlatList
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
        ref={scrollItem}
        data={data}
        onScrollBeginDrag={() => refLinear.current.hideLinear()}
        keyExtractor={(item, index) => item.key}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={60} // Reduce number in each render batch
        style={{ zIndex: 1 }}
      />
      <Linear ref={refLinear} />
    </View>
  );
}
const styles = StyleSheet.create({
  separator: {
    backgroundColor: Color.defaultColor,
    height: 15,
  },
});
