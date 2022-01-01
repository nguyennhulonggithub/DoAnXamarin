import React, { useRef, useState } from "react";
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
import SearchSlide from "../components/SearchScreen/SearchSlide";
import BigManga from "../components/MangaList/BigManga";
import ScrollManga from "../components/MangaList/ScrollManga";
import TabScrollView from "../components/SearchScreen/TabScrollView";
import TabScrollNewRelease from "../components/SearchScreen/TabScrollNewRelease";
import SearchPopup from "../components/Popup/SearchPopup";
import Test from "./Test";
import SearchTabBar from "../components/SearchScreen/SearchTabBar";
import ExploreMore from "../components/SearchScreen/ExploreMore";

export default function SearchScreen({ navigation }) {
  const scroll_Pallax = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <SearchTabBar />
      <ScrollView>
        <View style={{ height: 800, backgroundColor: Color.defaultColor }}>
          <SearchSlide />

          <Text style={[Font.title, { marginTop: 20, marginLeft: 20 }]}>
            New & Noteworthy
          </Text>

          <Animated.ScrollView
            horizontal
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scroll_Pallax } } }],
              { useNativeDriver: true }
            )}
          >
            <BigManga
              count_chapter='44'
              time_update='On Going'
              status='New'
              scroll_Pallax={scroll_Pallax}
              index={0}
            />
            <BigManga
              count_chapter='50'
              time_update='Update Weekly'
              status='New'
              scroll_Pallax={scroll_Pallax}
              index={1}
            />
            <BigManga
              count_chapter='90'
              time_update='On Going'
              status='New'
              scroll_Pallax={scroll_Pallax}
              index={2}
            />
            <BigManga
              count_chapter='90'
              time_update='On Going'
              status='New'
              scroll_Pallax={scroll_Pallax}
              index={3}
            />
            <BigManga
              count_chapter='90'
              time_update='On Going'
              status='New'
              scroll_Pallax={scroll_Pallax}
              index={4}
            />
          </Animated.ScrollView>
        </View>
        <View
          style={{
            backgroundColor: Color.defaultColor,
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: Color.baseColor,
              width: "100%",
              height: 420,
              marginBottom: 30,
            }}
          >
            <Text
              style={[
                Font.title,
                { marginLeft: 18, marginTop: 20, marginBottom: 15 },
              ]}
            >
              Highlighted Titles
            </Text>
            <ScrollManga navigation={navigation} />
            <TabScrollView />
          </View>
          {/* Top new releases */}
          <View
            style={[
              styles.tab,
              {
                height: 500,
              },
            ]}
          >
            <Text
              style={[
                Font.title,
                { marginLeft: 18, marginTop: 20, marginBottom: 15 },
              ]}
            >
              Top New Releases
            </Text>
            <TabScrollNewRelease />
          </View>
          <Text style={[Font.homeTitle, { marginLeft: 18, marginBottom: 18 }]}>
            Explore More
          </Text>
          <View
            style={{
              backgroundColor: Color.defaultColor,
              alignItems: "center",
              width: "100%",
              height: 600,
            }}
          >
            <View
              style={{
                backgroundColor: Color.baseColor,
                height: 480,
                width: "90%",
                borderRadius: 15,
              }}
            >
              <ExploreMore />
            </View>
          </View>
        </View>
      </ScrollView>
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
  },
  tab: {
    backgroundColor: Color.baseColor,
    width: "100%",

    marginBottom: 30,
  },
});
