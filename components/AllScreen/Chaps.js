import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";

export default function Chaps({ data, navigation }) {
  return (
    <>
      {data.map((item) => {
        return (
          <Pressable
            key={item.key}
            onPress={() => navigation.navigate("ChapterScreen")}
          >
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require("../../assets/genre/action.png")}
              />
              <View style={styles.DetailContainer}>
                <Text style={Font.baseTitle}>{item.name}</Text>
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
