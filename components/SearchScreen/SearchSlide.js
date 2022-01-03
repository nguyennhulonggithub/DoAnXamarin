import React, { useRef, useState } from "react";
import { useEffect } from "react";
import {
  View,
  Image,
  useWindowDimensions,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Color } from "../../variable/Color";
import images from "./Banner";

const data = [
  {
    key: 0,
    bannerImg: images.banner1,
  },
  { key: 1, bannerImg: images.banner2 },
  {
    key: 2,
    bannerImg: images.banner3,
  },
];
export default function SearchSlide() {
  const width = Dimensions.get("window").width;

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
  function animatedSlide(item) {
    const refSlide = useRef(new Animated.Value(8)).current;
    useEffect(() => {
      if (position_width == item.key) {
        Animated.timing(refSlide, {
          toValue: 16,
          duration: 100,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(refSlide, {
          toValue: 8,
          duration: 100,
          useNativeDriver: false,
        }).start();
      }
    }, [position_width]);

    return (
      <Animated.View
        key={item.key}
        style={[
          styles.circle,
          position_width == item.key && {
            backgroundColor: Color.baseColor,
          },
          { width: refSlide },
        ]}
      ></Animated.View>
    );
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
        {data.map((item) => {
          return (
            <Image
              key={item.key}
              style={[styles.BannerImage, { width: width }]}
              source={item.bannerImg}
            />
          );
        })}
      </Animated.ScrollView>
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {data.map((item) => animatedSlide(item))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  circle: {
    height: 8,

    backgroundColor: Color.gray,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  BannerImage: { height: 350, resizeMode: "cover" },
});
