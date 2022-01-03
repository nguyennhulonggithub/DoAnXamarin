import React, { useRef } from "react";
import { useEffect } from "react";
import { View, Image, Animated, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../variable/Color";
import images from "./Banner";

const data = [
  {
    key: 1,
    bannerImg: images.banner1,
  },
  { key: 3, bannerImg: images.banner2 },
  {
    key: 5,
    bannerImg: images.banner3,
  },
];
const length_data = data.length;
const first_key = data[0].key;
const last_key = data[length_data - 1].key;

export default function SearchSlide() {
  const width = Dimensions.get("window").width;
  const half_width = width / 2;
  const refScrollView = useRef();

  const refAnimatedScroll = useRef(new Animated.Value(width)).current;

  function animatedSlide(item, refAnimatedScroll) {
    let translation = null;
    if (item.key == first_key) {
      translation = refAnimatedScroll.interpolate({
        inputRange: [
          half_width * item.key,
          half_width * (item.key + 1),
          half_width * (item.key + 2),
          half_width * (last_key + 2),
          half_width * (last_key + 3),
        ],
        outputRange: [8, 16, 8, 8, 16],
        extrapolate: "clamp",
      });
    } else if (item.key == last_key) {
      translation = refAnimatedScroll.interpolate({
        inputRange: [
          0,
          half_width,
          half_width * item.key,
          half_width * (item.key + 1),
          half_width * (item.key + 2),
        ],
        outputRange: [16, 8, 8, 16, 8],
        extrapolate: "clamp",
      });
    } else {
      translation = refAnimatedScroll.interpolate({
        inputRange: [
          half_width * item.key,
          half_width * (item.key + 1),
          half_width * (item.key + 2),
        ],
        outputRange: [8, 16, 8],
        extrapolate: "clamp",
      });
    }

    return (
      <Animated.View
        key={item.key}
        style={[styles.circle, { width: translation }]}
      ></Animated.View>
    );
  }

  return (
    <View>
      <Animated.ScrollView
        ref={refScrollView}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentOffset={{ x: width, y: 0 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: refAnimatedScroll } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(e) => {
          if (
            e.nativeEvent.contentOffset.x >
            half_width * (length_data * 2 + 1)
          ) {
            refScrollView.current.scrollTo({
              x: half_width * 2,
              animated: false,
            });
          } else if (e.nativeEvent.contentOffset.x < half_width) {
            refScrollView.current.scrollTo({
              x: half_width * length_data * 2,
              animated: false,
            });
          }
        }}
      >
        <Image
          style={[styles.BannerImage, { width: width }]}
          source={data[length_data - 1].bannerImg}
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
          source={data[0].bannerImg}
        />
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
        {data.map((item) => animatedSlide(item, refAnimatedScroll))}
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
