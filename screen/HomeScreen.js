import React, { useRef, useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Animated,
} from "react-native";

import { Color } from "../variable/Color";
import { Font } from "../variable/Font";
import ResumeReading from "../components/HomeScreen/ResumeReading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ExploreCataLog from "../components/HomeScreen/ExploreCataLog";
import CategoryFlatlist from "../components/HomeScreen/CategoryFlatlist";
import ListFlatlist from "../components/HomeScreen/ListFlatlist";
import { useEffect } from "react";
import axios from "axios";
import { server } from "../variable/ServerName";
import Banner from "../components/HomeScreen/Banner";
import MangaSetting from "../components/Popup/MangaSettings";

//màn hình HomeScreen
export default function HomeScreen({ navigation }) {
  const opacity_head = useRef(new Animated.Value(0)).current;
  const translation = opacity_head.interpolate({
    inputRange: [50, 300],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const [data, set_data] = useState([]);

  useEffect(() => {
    axios.get(server + "/genre").then((res) => {
      set_data(res.data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.header, { opacity: translation }]}
      ></Animated.View>

      <Text
        style={[
          Font.homeTitle,
          { position: "absolute", top: 25, left: 20, zIndex: 10 },
        ]}
      >
        IKNR
      </Text>
      <MaterialCommunityIcons
        name='treasure-chest'
        size={24}
        color='white'
        style={{ position: "absolute", top: 35, right: 20, zIndex: 10 }}
      />

      <Animated.ScrollView
        style={styles.container}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: opacity_head } } }],
          { useNativeDriver: true }
        )}
      >
        {/*banner to trên cùng*/}
        <Banner navigation={navigation} />

        {/*resume reading*/}
        <View style={[styles.list]}>
          <Text style={[Font.homeTitle, { padding: 20 }]}>Resume Reading</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ResumeReading />
            <ResumeReading />
            <ResumeReading />
          </ScrollView>
        </View>
        {/* New titles for you */}
        <View style={styles.action_list}>
          <Text style={[Font.homeTitle, { padding: 15 }]}>
            New Titles For You
          </Text>
          <ListFlatlist navigation={navigation} type='new_title' />
        </View>
        {/* Top pick for you */}
        <View style={styles.action_list}>
          <Text style={[Font.homeTitle, { padding: 15 }]}>
            Top Picks For You
          </Text>
          <ListFlatlist navigation={navigation} type='top_pick' />
        </View>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.action_list}>
              <Text style={[Font.homeTitle, { padding: 15 }]}>
                {item.Name} Titles
              </Text>
              <CategoryFlatlist
                navigation={navigation}
                type={item.Name}
                other=''
              />
            </View>
          );
        })}
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.action_list}>
              <Text style={[Font.homeTitle, { padding: 15 }]}>
                Trending In {item.Name}
              </Text>
              <CategoryFlatlist
                navigation={navigation}
                type={item.Name}
                other='trending'
              />
            </View>
          );
        })}

        <View>
          <Text style={[Font.homeTitle, { padding: 15 }]}>
            Explore INKR Catalog
          </Text>
          <ExploreCataLog data={data} />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

//style sheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.defaultColor,
    marginTop: 0,
    flex: 1,
  },
  header: {
    backgroundColor: Color.baseColor,
    height: 80,
    width: "100%",

    position: "absolute",
    top: 0,
    zIndex: 1,
  },

  //list của một mục truyện tranh
  list: {
    height: 250,
    width: "100%",

    backgroundColor: "black",
  },
  action_list: {
    height: 380,
    width: "100%",
  },
});
