import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import { server } from "../../variable/ServerName";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { useState } from "react";
import New from "../AllScreen/New";
import Hot from "../AllScreen/Hot";
import Save from "../AllScreen/Save";
import { Font } from "../../variable/Font";
import Circle from "../AllScreen/Circle";
export default function Banner({ navigation }) {
  const [data, set_data] = useState([]);

  useEffect(() => {
    axios.get(server + "/manga/random").then((res) => {
      set_data(res.data[0][0]);
    });
  }, []);
  let Genre = "";
  if (data.Genre) {
    const dataGenre = data.Genre.split(",");
    Genre = dataGenre[dataGenre.length - 1];
  }

  function description() {
    if (data.Save) {
      return <Save save={data.Save} />;
    }
    if (data.New) {
      return <New status={data.Status} />;
    }
    return <Hot />;
  }

  return (
    <Pressable
      style={styles.banner}
      onPress={() =>
        navigation.navigate("MangaScreen", {
          idManga: data.idManga,
        })
      }
    >
      <Image
        style={styles.bannerImg}
        source={{ uri: server + data.ImageAPI }}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(255, 255, 255, 0)", "#403f3f", "#050505"]}
        style={[styles.linear]}
      >
        {description()}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <Text style={Font.base_description}>{Genre}</Text>
          <Circle />
          <Text style={Font.base_description}>{data.Status}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  //banner màn hình chính
  banner: {
    width: "100%",
    height: 400,
    backgroundColor: "white",
  },
  //imgbackground của banner
  bannerImg: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  linear: {
    paddingTop: 60,
    width: "100%",
    height: 150,
    position: "absolute",
    bottom: 0,
    opacity: 0.8,
    zIndex: 2,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
