import React, { useRef } from "react";
import { useEffect } from "react";
import {
  View,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";
import images from "../components/SearchScreen/Banner";
import { deleteUser } from "../InteractServer/GetUserSqlite";
import {
  deleteResume,
  getResume,
  insertResume,
} from "../InteractServer/ResumeSave";
import { Color } from "../variable/Color";

export default function Test() {
  useEffect(() => {
    // insertResume({
    //   idManga: 10,
    //   mangaTitle: "test222",
    //   chapterName: "Chapter 2222",
    //   chapterId: 111,
    //   percent_read: 1212,
    //   time_read: 1641532725059,
    //   chapterOrder: 1,
    //   image_chapter: "/m/27/cover/1.jpg",
    //   total_height: 21349.571428571428,
    // });
    // getResume().then((res) => {
    // });
    // deleteUser();
    deleteResume();
    return;
  }, []);

  return (
    <View>
      <Text>hello world</Text>
    </View>
  );
}
