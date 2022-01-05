import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { server } from "../../variable/ServerName";
import MangaTag from "../MangaList/MangaTag";

export default function ListFlatlist({ navigation, type }) {
  const [data, set_data] = useState([]);
  useEffect(() => {
    axios.get(server + "/list/" + type).then((res) => {
      set_data(res.data[0].slice(0, 8));
    });
  }, []);

  return (
    <ScrollView horizontal={true}>
      {data.map((item) => {
        return (
          <MangaTag
            key={item.idManga}
            idManga={item.idManga}
            image_api={item.ImageAPI}
            first_line={item.New ? item.New + " new chapters" : null}
            second_line={item.Status}
            new={item.New}
            hot={item.Hot}
            save={item.Save}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
}
