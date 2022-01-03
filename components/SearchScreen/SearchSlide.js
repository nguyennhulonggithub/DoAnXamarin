import React, { useRef, useState } from "react";
import { useEffect } from "react";
import {
  View,
  Image,
  useWindowDimensions,
  Animated,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Color } from "../../variable/Color";
import images from "./Banner";

const data = [
  {
    key: 1,
    bannerImg: images.banner1,
  },
  { key: 2, bannerImg: images.banner2 },
  {
    key: 3,
    bannerImg: images.banner3,
  },
];
export default function SearchSlide() {
  const width = Dimensions.get("window").width;
  const refScrollView = useRef();
  const [position_width, set_position_width] = useState(0);
  function set_circle(value) {
    if (value > 0 && value < width / 2) {
      set_position_width(3);
    } else if (value > width / 2 && value < (width / 2) * 3) {
      set_position_width(1);
    } else if (value > (width / 2) * 3 && value < (width / 2) * 5) {
      set_position_width(2);
    } else if (value > (width / 2) * 5 && value < (width / 2) * 7) {
      set_position_width(3);
    } else if (value > (width / 2) * 7) {
      set_position_width(1);
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
      <ScrollView
        ref={refScrollView}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={500}
        onScroll={(e) => {
          set_circle(e.nativeEvent.contentOffset.x);
        }}
        onMomentumScrollEnd={(e) => {
          if (e.nativeEvent.contentOffset.x > (width / 2) * 7) {
            refScrollView.current.scrollTo({
              x: (width / 2) * 2,
              animated: false,
            });
          } else if (e.nativeEvent.contentOffset.x < width / 2) {
            refScrollView.current.scrollTo({
              x: (width / 2) * 6,
              animated: false,
            });
          }
        }}
      >
        <Image
          style={[styles.BannerImage, { width: width }]}
          source={images.banner3}
        />
        {data.map((item) => {
          return (
            <Image
              key={item.key}
              style={[styles.BannerImage, { width: width }]}
              source={item.bannerImg}
            />
          );
        })}
        <Image
          style={[styles.BannerImage, { width: width }]}
          source={images.banner1}
        />
      </ScrollView>
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
