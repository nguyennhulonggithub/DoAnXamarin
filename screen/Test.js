import React from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Animated,
  Pressable,
} from "react-native";
import { Color } from "../variable/Color";
import { AntDesign } from "@expo/vector-icons";
import { Font } from "../variable/Font";
import SearchPopup from "../components/Popup/SearchPopup";

export default function Test() {
  const loose_focus = useRef();
  const seach_modal = React.createRef(null);
  const transform_search = useRef(new Animated.Value(0)).current;
  const transf = transform_search.interpolate({
    inputRange: [0, 1],
    outputRange: ["120%", "100%"],
  });
  function transform() {
    Animated.timing(transform_search, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
    seach_modal.current.setModalVisible(1);
  }
  function back_transfrom() {
    Animated.timing(transform_search, {
      toValue: 0,

      useNativeDriver: false,
    }).start();

    loose_focus.current.blur();
  }

  return (
    <View>
      <View style={[styles.search_container]}>
        <Animated.View
          style={[styles.search_inside_container, { width: transf }]}
        >
          <TextInput
            ref={loose_focus}
            style={styles.input}
            onFocus={() => transform()}
            placeholder='Search'
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
              back_transfrom();
              seach_modal.current.setModalVisible(0);
            }}
          >
            <Text style={[Font.baseTitle, { fontSize: 16 }]}>Cancel</Text>
          </Pressable>
        </Animated.View>
      </View>

      <View
        style={{
          backgroundColor: "red",
          zIndex: 0,
          width: "100%",
          height: 1000,
          position: "absolute",
          top: 100,
        }}
      >
        <View
          style={{
            backgroundColor: "blue",
            zIndex: 1,
            width: "100%",
            height: 1000,
            position: "absolute",
          }}
        ></View>
        <SearchPopup
          ref={seach_modal}
          remove_focus={() => loose_focus.current.blur()}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  search_container: {
    backgroundColor: Color.baseColor,
    height: 100,
    width: "100%",
    justifyContent: "center",
    paddingTop: 20,
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
