import * as React from "react";
import { View, useWindowDimensions, ScrollView, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { Color } from "../../variable/Color";
import SingleTabScrollView from "./SingleTabScrollView";

const data = {
  Action: [
    { count_chapter: 44, time_update: "On going", status: "New", key: 0 },
    { count_chapter: 45, time_update: "On going", status: "New", key: 1 },
    {
      count_chapter: 46,
      time_update: "Update Weekly",
      status: "Hot",
      key: 2,
    },
    {
      count_chapter: 22,
      time_update: "Update Weekly",
      status: "Hot",
      key: 3,
    },
  ],
  Fantasy: [
    { count_chapter: 441, time_update: "On going", status: "New", key: 7 },
    { count_chapter: 41, time_update: "On going", status: "New", key: 8 },
    { count_chapter: 33, time_update: "On going", status: "New", key: 9 },
    { count_chapter: 33, time_update: "On going", status: "New", key: 10 },
  ],
  Adventure: [
    {
      count_chapter: 49,
      time_update: "Update Weekly",
      status: "Hot",
      key: 4,
    },
    { count_chapter: 434, time_update: "On going", status: "New", key: 5 },
    { count_chapter: 43, time_update: "On going", status: "New", key: 6 },
  ],
};

const renderScene = ({ route }) => {
  switch (route.key) {
    case "Action":
      return <SingleTabScrollView data={data.Action} />;
    case "Fantasy":
      return <SingleTabScrollView data={data.Fantasy} />;
    case "Adventure":
      return <SingleTabScrollView data={data.Adventure} />;

    default:
      return null;
  }
};
const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ color, fontSize: 16 }}>{route.title}</Text>
    )}
    scrollEnabled
    tabStyle={{ width: 100 }}
    style={{
      backgroundColor: Color.baseColor,
      borderBottomColor: "#aba7a7",
      borderBottomWidth: 0.5,
    }}
    indicatorStyle={{ backgroundColor: "white" }}
  />
);
export default function TabScrollView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Action", title: "Action" },
    { key: "Fantasy", title: "Fantasy" },
    { key: "Adventure", title: "Adventure" },
    { key: "Horror", title: "Horror" },
    { key: "Comedy", title: "Comedy" },
    { key: "Slice of life", title: "Slice of life" },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
