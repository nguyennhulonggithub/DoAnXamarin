import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import GenreTag from "./GenreTag";
import axios from "axios";
import { server } from "../../variable/ServerName";

export default function ExploreCataLog() {
  const [data, set_data] = useState([]);
  useEffect(() => {
    axios.get(server + "/genre").then((res) => {
      set_data(res.data);
    });
  }, []);

  return (
    <View style={styles.genreContainer}>
      {data.map((item) => {
        return (
          <GenreTag
            image={item.ImageAPI}
            name={item.Name}
            key={item.idCategory}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
