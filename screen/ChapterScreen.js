import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
const data = [];
for (let i = 0; i < 50; i++) {
  data.push("../assets/testChap/" + i + ".jpg");
}

export default function ChapterScreen() {
  return (
    <ScrollView>
      <Text>Hello</Text>
    </ScrollView>
  );
}
