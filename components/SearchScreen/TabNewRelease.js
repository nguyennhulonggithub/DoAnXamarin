import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import NewRelease from "./NewRelease";

export default function TabNewRelease({ data }) {
  const [final_data, set_final_data] = useState([]);

  useEffect(() => {
    append_data(data);
  }, []);
  function append_data(data) {
    const final_data = [];
    for (let i = 0; i < data.length; i = i + 2) {
      final_data.push([data[i], data[i + 1]]);
    }
    set_final_data(final_data);
  }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {final_data.map((item, index) => {
        return (
          <View key={index} style={{ height: 1000 }}>
            <View style={{}}>
              <NewRelease
                index={index * 2}
                name={item[0].name}
                date={item[0].date}
                view={item[0].view}
                status={item[0].status}
                time_update={item[0].time_update}
              />
            </View>
            {item[1] && (
              <View>
                <NewRelease
                  index={index * 2 + 1}
                  count_chapter={item[1].count_chapter}
                  name={item[1].name}
                  date={item[1].date}
                  view={item[1].view}
                  status={item[1].status}
                  time_update={item[1].time_update}
                />
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}
