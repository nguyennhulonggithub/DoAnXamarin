import React, { useRef } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { set_height_chapter } from "../../redux/actions";
import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import Tags from "../AllScreen/Tags";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Stats from "../AllScreen/Stats";
import SimilarTitle from "./SimilarTitle";

export default function Detail({ index, summary, read, subscribe, like }) {
  const dispatch = useDispatch();
  const cur_height = useRef(0);
  const data = ["Sports", "Ecomomic"];
  function set_height_onPress() {
    dispatch(set_height_chapter(cur_height.current));
  }
  useEffect(() => {
    if (index == 1) {
      set_height_onPress();
    }
  }, [index]);
  return (
    <View
      onLayout={(event) => {
        cur_height.current = event.nativeEvent.layout.height;
      }}
      style={{ padding: 15, paddingTop: 65 }}
    >
      <Text style={[Font.title, { marginBottom: 15 }]}>Genres</Text>
      <Tags data={data} />
      <Text style={[Font.title, { marginVertical: 15 }]}>Summary</Text>
      <Text style={Font.description}>{summary}</Text>
      <Text style={[Font.title, { marginVertical: 15 }]}>Stats</Text>
      <View>
        <View style={{ backgroundColor: Color.baseColor }}>
          <View style={styles.statsContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Stats iconName='readme' source='awesome5' color='#e65c00' />
              <Text style={[{ marginLeft: 10 }, Font.description]}>Reads</Text>
            </View>
            <Text style={Font.baseTitle}>{read}</Text>
          </View>
          <View style={styles.statsContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Stats iconName='bell' source='awesome5' color='#cc00ff' />
              <Text style={[{ marginLeft: 10 }, Font.description]}>
                Subscribes
              </Text>
            </View>
            <Text style={Font.baseTitle}>{subscribe}</Text>
          </View>
          <View style={styles.statsContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Stats iconName='like2' source='ant' color='#008ae6' />
              <Text style={[{ marginLeft: 10 }, Font.description]}>Likes</Text>
            </View>
            <Text style={Font.baseTitle}>{like}</Text>
          </View>
        </View>
      </View>
      <Text style={[Font.title, { marginVertical: 15 }]}>Similar Titles</Text>
      <SimilarTitle
        title='12 Evil Cats'
        status='New'
        genre='Fantasy'
        read={983}
      />
      <SimilarTitle
        title='A Song Dweling'
        status='New'
        genre='Fantasy'
        read={983}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Color.onBaseColor,
    padding: 10,
    alignItems: "center",
  },
});
