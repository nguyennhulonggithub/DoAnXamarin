import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import NewRelease from "../MangaList/NewRelease";

export default function SingleTabNewRelease({ data, navigation }) {
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
          <View key={index} style={{ height: 1000 }}>
            <View>
              <NewRelease
                index={index * 2}
                dataRelease={item[0]}
                navigation={navigation}
              />
            </View>
            {item[1] && (
              <View>
                <NewRelease
                  index={index * 2 + 1}
                  dataRelease={item[1]}
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
{
  /* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {final_data.map((item, index) => {
    return (
      <View key={index} style={{ height: 1000 }}>
        <View>
          <NewRelease
            index={index * 2}
            name={item[0].Name}
            date={item[0].DateAdded}
            view={item[0].TotalView}
            status={item[0].status}
            image={item[0].ImageAPI}
            time_update={item[0].time_update}
          />
        </View>
        {item[1] && (
          <View>
            <NewRelease
              index={index * 2 + 1}
              count_chapter={item[1].count_chapter}
              name={item[1].Name}
              date={item[1].DateAdded}
              view={item[1].TotalView}
              status={item[1].status}
              image={item[1].ImageAPI}
              time_update={item[1].time_update}
            />
          </View>
        )}
      </View>
    );
  })}
</ScrollView>; */
}
