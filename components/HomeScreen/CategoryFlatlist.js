import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { server } from "../../variable/ServerName";
import MangaTag from "../MangaList/MangaTag";

export default function CategoryFlatlist({ navigation }) {
  const [data, set_data] = useState([]);
  useEffect(() => {
    axios.get(server + "/genre/Action").then((res) => {
      set_data(res.data.slice(0, 8));
    });
  }, []);

  return (
    <ScrollView horizontal={true}>
      {data.map((item) => {
        return (
          <MangaTag
            key={item.idManga}
            idManga={item.idManga}
            image_api={item.ImageApi}
            count_chapter={item.count_chapter}
            status={item.Status}
            description={item.Description}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
}
