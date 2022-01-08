import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import NewRelease from "../MangaList/NewRelease";
import LikeTags from "./LikeTags";
export default function TopLikeTitle({ data, navigation }) {
  const [final_data, set_final_data] = useState([]);

  useEffect(() => {
    if (data) {
      append_data(data);
    }
  }, [data]);
  function append_data(array) {
    const rows = array.reduce(function (rows, key, index) {
      return (
        (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
        rows
      );
    }, []);

    set_final_data(rows);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={final_data}
      keyExtractor={(item, index) => index}
      renderItem={({ item, index }) => {
        return (
          <View key={index} style={{ height: 400 }}>
            <View style={{ marginLeft: 10 }}>
              <LikeTags
                index={index * 2 + 1}
                data={item[0]}
                navigation={navigation}
              />
            </View>
            {item[1] && (
              <View style={{ marginLeft: 10 }}>
                <LikeTags
                  index={index * 2 + 2}
                  data={item[1]}
                  navigation={navigation}
                />
              </View>
            )}
          </View>
        );
      }}
    />
  );
}
