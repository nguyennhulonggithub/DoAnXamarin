import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import { server } from "../../variable/ServerName";

export default function Chaps({
  data,
  navigation,
  reverseBoolean,
  mangaTitle,
}) {
  const [reverse_data, set_reverse_data] = useState([]);
  const [map_data, set_map_data] = useState([]);
  useEffect(() => {
    set_map_data(data);
    set_reverse_data(data.slice().reverse());
  }, [data]);

  useEffect(() => {
    if (reverseBoolean) {
      set_map_data(reverse_data);
    } else {
      set_map_data(data);
    }
  }, [reverseBoolean]);

  return (
    <>
      {map_data.map((item) => {
        return (
          <Pressable
            key={item.idChapter}
            onPress={() => {
              navigation.navigate("ChapterScreen", {
                dataChapter: data,
                chapterId: item.idChapter,
                chapterName: item.Name,
                mangaTitle: mangaTitle,
                chapterOrder: item.Order,
              });
            }}
          >
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{ uri: server + item.ImageAPI }}
              />
              <View style={styles.DetailContainer}>
                <Text style={Font.baseTitle}>{item.Name}</Text>
                <Text style={Font.baseTitle}>{item.status}</Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <View style={styles.line}></View>
            </View>
          </Pressable>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  DetailContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 280,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  image: {
    height: 80,
    width: 100,
    marginLeft: 15,
  },
  line: {
    width: 280,
    height: 1,
    backgroundColor: Color.white,
    opacity: 0.1,
  },
});
