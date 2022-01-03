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
import SliderScroll from "../components/ChapterScreen/SliderScroll";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const top = windowHeight / 3;
const bottom = (windowHeight / 3) * 2;

export default function ChapterScreen({ route, navigation }) {
  const { chapterName, chapterId, mangaTitle, dataChapter } = route.params;

  const [data, setdata] = useState([]);
  const refLinear = useRef();
  const refSlider = useRef();
  const scrollItem = useRef();
  const [itemHeights, set_itemHeights] = useState([]);

  const [cur_posY, set_cur_posY] = useState(0);
  const length = itemHeights.length - 1;

  useEffect(() => {
    axios.get(server + "/chapter/" + chapterId).then((res) => {
      setdata(res.data);
      let array = [];
      let final_height = 0;
      res.data.forEach((element) => {
        let height =
          Math.floor((windowWidth * element.height) / element.width) + 15;
        final_height += height;
        array.push(height);
      });

      set_itemHeights(array);

      refSlider.current.setState({
        actual_height: final_height - windowHeight,
      });
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
      refSlider.current.setLinear();
    }
  };
  const scrollToFlatlist = (posY) => {
    scrollItem.current.scrollToOffset({ animated: true, offset: posY });
  };
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
        ref={scrollItem}
        data={data}
        onScrollBeginDrag={() => {
          refLinear.current.hideLinear();
          refSlider.current.hideLinear();
        }}
        keyExtractor={(item, index) => item.key}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={60} // Reduce number in each render batch
        style={{ zIndex: 1 }}
        onScroll={(e) =>
          refSlider.current.setState({ value: e.nativeEvent.contentOffset.y })
        }
      />
      <Linear
        ref={refLinear}
        navigation={navigation}
        mangaTitle={mangaTitle}
        chapterName={chapterName}
        dataChapter={dataChapter}
      />
      <SliderScroll
        ref={refSlider}
        value={cur_posY}
        scrollOffset={scrollToFlatlist}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  separator: {
    backgroundColor: Color.defaultColor,
    height: 15,
  },
});
