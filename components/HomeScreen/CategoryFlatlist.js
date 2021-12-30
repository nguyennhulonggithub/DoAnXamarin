import axios from "axios";
import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { server } from "../../variable/ServerName";
import MangaTag from "../MangaList/MangaTag";

export default function CategoryFlatlist({ navigation }) {
  return (
    <ScrollView horizontal={true}>
      <MangaTag
        count_chapter='44'
        time_update='On going'
        status='New'
        navigation={navigation}
      />
      <MangaTag
        count_chapter='33'
        time_update='Update Weekly'
        navigation={navigation}
      />
      <MangaTag
        count_chapter='22'
        time_update='On going'
        status='New'
        navigation={navigation}
      />
      <MangaTag
        count_chapter='11'
        time_update='On going'
        status='New'
        navigation={navigation}
      />
    </ScrollView>
  );
}
