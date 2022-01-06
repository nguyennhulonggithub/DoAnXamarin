import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Font } from "../../variable/Font";
import { server } from "../../variable/ServerName";
import dateFormat from "dateformat";
function ResumeTag({ data_resume }) {
  console.log(data_resume);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: server + data_resume.image_chapter }}
        style={styles.img}
      ></Image>

      <View style={styles.detail}>
        <Text style={Font.title}>{data_resume.mangaTitle}</Text>
        <Text style={Font.description} numberOfLines={1}>
          {data_resume.chapterName}
        </Text>
        <Text style={Font.description}>
          {Math.round(data_resume.percent_read)}% read
        </Text>
        <Text style={[Font.description, { marginTop: 10 }]}>
          {dateFormat(Date.now() - data_resume.time_read, "dd mmm yyyy")}
        </Text>
      </View>

      {/* dấu 3 chấm hiện bảng tương tác với manga */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    borderRadius: 10,
    width: 350,
    height: 150,
    paddingHorizontal: 15,
    flexDirection: "row",
    marginLeft: 20,
  },
  img: {
    height: 120,
    width: 80,
    resizeMode: "cover",
  },
  detail: {
    paddingHorizontal: 15,
    width: 250,
  },
});

export default ResumeTag;
