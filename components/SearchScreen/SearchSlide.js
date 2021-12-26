import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  useWindowDimensions,
  Animated,
} from "react-native";
import { Color } from "../../variable/Color";

export default function SearchSlide() {
  const { width } = useWindowDimensions();

  const [position_width, set_position_width] = useState(0);
  function set_circle(value) {
    if (value > 0 && value < 200) {
      set_position_width(0);
    } else if (value > 200 && value < 600) {
      set_position_width(1);
    } else if (value > 600) {
      set_position_width(2);
    }
  }

  return (
    <View>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={500}
        onScroll={(e) => {
          set_circle(e.nativeEvent.contentOffset.x);
        }}
      >
        <Image
          style={{ width: width, height: 350 }}
          source={require("../../assets/home/home-banner.png")}
        />
        <Image
          style={{ width: width, height: 350 }}
          source={require("../../assets/home/home-manga-1.jpg")}
        />
        <Image
          style={{ width: width, height: 350 }}
          source={require("../../assets/home/home-manga-2.jpg")}
        />
      </Animated.ScrollView>
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 30,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 10,
            width: 10,
            backgroundColor:
              position_width == 0 ? Color.baseColor : Color.white,
            marginHorizontal: 5,
            borderRadius: 8,
          }}
        ></View>
        <View
          style={{
            height: 10,
            width: 10,
            backgroundColor:
              position_width == 1 ? Color.baseColor : Color.white,
            marginHorizontal: 5,
            borderRadius: 8,
          }}
        ></View>
        <View
          style={{
            height: 10,
            width: 10,
            backgroundColor:
              position_width == 2 ? Color.baseColor : Color.white,
            marginHorizontal: 5,
            borderRadius: 8,
          }}
        ></View>
      </View>
    </View>
  );
}
