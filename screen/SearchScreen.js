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

import { Font } from "../variable/Font";
import SearchSlide from "../components/SearchScreen/SearchSlide";

import TabScrollView from "../components/SearchScreen/TabScrollView";
import TabScrollNewRelease from "../components/SearchScreen/TabScrollNewRelease";

import SearchTabBar from "../components/SearchScreen/SearchTabBar";
import ExploreMore from "../components/SearchScreen/ExploreMore";
import ParallaxSlide from "../components/MangaList/ParallaxSlide";
import TabScrollTrending from "../components/SearchScreen/TabScrollTrending";

export default function SearchScreen({ navigation }) {
  return (
    <View>
      <SearchTabBar navigation={navigation} />
      <ScrollView>
        <View style={{ height: 920, backgroundColor: Color.defaultColor }}>
          <SearchSlide />
          <ParallaxSlide navigation={navigation} />
        </View>
        <View
          style={{
            backgroundColor: Color.defaultColor,
            flex: 1,
          }}
        >
          <View style={styles.container_highlight}>
            <Text
              style={[
                Font.title,
                { marginLeft: 18, marginTop: 20, marginBottom: 15 },
              ]}
            >
              Highlighted Titles
            </Text>

            <TabScrollView navigation={navigation} />
          </View>
          {/* Treding */}
          <View style={[styles.tab, { height: 400 }]}>
            <Text
              style={[
                Font.title,
                { marginLeft: 18, marginTop: 20, marginBottom: 15 },
              ]}
            >
              Trending Today
            </Text>

            <TabScrollTrending navigation={navigation} />
          </View>
          {/* Top new releases */}
          <View style={[styles.tab]}>
            <Text
              style={[
                Font.title,
                { marginLeft: 18, marginTop: 20, marginBottom: 15 },
              ]}
            >
              Top New Releases
            </Text>
            <TabScrollNewRelease navigation={navigation} />
          </View>
          <Text style={[Font.homeTitle, { marginLeft: 18, marginBottom: 18 }]}>
            Explore More
          </Text>
          <View style={styles.exploreMoreContainer}>
            <View style={styles.inside_exploreMore}>
              <ExploreMore navigation={navigation} />
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
  container_highlight: {
    backgroundColor: Color.baseColor,
    width: "100%",
    height: 420,
    marginBottom: 30,
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
    height: 500,
    marginBottom: 30,
  },
  exploreMoreContainer: {
    backgroundColor: Color.defaultColor,
    alignItems: "center",
    width: "100%",
    height: 600,
  },
  inside_exploreMore: {
    backgroundColor: Color.baseColor,
    height: 480,
    width: "90%",
    borderRadius: 15,
  },
});
