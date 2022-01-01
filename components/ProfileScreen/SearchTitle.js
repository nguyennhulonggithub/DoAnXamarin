import React from "react";

import { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  Pressable,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";

export default function SearchTitle(props) {
  const loose_focus = useRef();

  const transform_search = useRef(new Animated.Value(0)).current;
  const transX = transform_search.interpolate({
    inputRange: [0, 1],
    outputRange: ["120%", "100%"],
  });

  const transY = transform_search.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -35],
  });
  function transform() {
    Animated.timing(transform_search, {
      toValue: 1,

      useNativeDriver: false,
    }).start();
    props.hideOnSearch(false);
  }
  function back_transform() {
    Animated.timing(transform_search, {
      toValue: 0,

      useNativeDriver: false,
    }).start();

    loose_focus.current.blur();
    props.hideOnSearch(true);
  }

  return (
    <Animated.View
      style={[styles.search_container, { transform: [{ translateY: transY }] }]}
    >
      <Animated.View
        style={[styles.search_inside_container, { width: transX }]}
      >
        <TextInput
          ref={loose_focus}
          style={styles.input}
          onFocus={() => transform()}
          placeholder='Search Title'
          placeholderTextColor={Color.white}
        />
        <AntDesign
          name='search1'
          style={styles.searchButton}
          size={24}
          color='white'
        />
        <Pressable
          style={styles.cancel_button}
          onPress={() => {
            back_transform();
          }}
        >
          <Text style={[Font.baseTitle, { fontSize: 16 }]}>Cancel</Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  search_container: {
    backgroundColor: Color.baseColor,
    height: 100,
    width: "100%",
    position: "absolute",
    top: 70,
  },
  search_inside_container: {
    backgroundColor: Color.baseColor,
    height: 50,
    alignItems: "center",
    opacity: 0.5,
    flexDirection: "row",
  },
  input: {
    marginLeft: 15,
    height: 40,
    width: "78%",
    backgroundColor: "#595959",
    borderRadius: 10,
    paddingLeft: 40,
    paddingRight: 20,
    color: Color.white,
  },
  searchButton: {
    position: "absolute",
    top: 12,
    left: 25,
  },
  cancel_button: {
    marginLeft: 13,
    zIndex: 10,
    height: 50,
    width: 80,

    justifyContent: "center",
  },
  search_background: {
    width: "100%",
    height: 700,
    backgroundColor: Color.defaultColor,
    position: "absolute",
    top: 100,
    padding: 15,
  },
});
