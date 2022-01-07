import React from "react";
import { FlatList, ScrollView } from "react-native";
import ResumeTag from "../MangaList/ResumeTag";
import { useSelector } from "react-redux";

export default function ResumeReading({ navigation }) {
  const data = useSelector((state) => state.resume);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => {
        return <ResumeTag data_resume={item} navigation={navigation} />;
      }}
      keyExtractor={(item, index) => index}
    />
  );
}
