import React from "react";
import { FlatList } from "react-native";

import TrendingTag from "../MangaList/TrendingTag";

export default function SingleTabTrending({ data = [], navigation }) {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.idManga}
      renderItem={({ item, index }) => {
        return (
          <TrendingTag
            idManga={item.idManga}
            image={item.ImageAPI}
            view={item.TotalView}
            navigation={navigation}
            index={index + 1}
          />
        );
      }}
      initialNumToRender={10}
      maxToRenderPerBatch={60}
    />
  );
}
