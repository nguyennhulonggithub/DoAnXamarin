import React from "react";
import { View, Text } from "react-native";
import Body from "./Body";
import { useSelector } from "react-redux";
export default function ContainerBody({
  data,
  status,
  summary,
  like,
  subscribe,
  read,
  translate,
  navigation,
  mangaTitle,
}) {
  return (
    <View
      style={{
        height: 50 + useSelector((state) => state.height),

        width: "100%",
      }}
    >
      <Body
        data={data}
        status={status}
        summary={summary}
        like={like}
        subscribe={subscribe}
        read={read}
        translate={translate}
        navigation={navigation}
        mangaTitle={mangaTitle}
      />
    </View>
  );
}
