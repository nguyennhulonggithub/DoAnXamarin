import * as React from "react";
import { View, useWindowDimensions, ScrollView, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import TabNewRelease from "./TabNewRelease";
import { Color } from "../../variable/Color";

const data = {
  Action: [
    {
      date: "3 Dec 2021",
      status: "Hot",
      name: "The Resurging Flame | AFK Arena",
      view: 19,
      key: 4,
    },
    {
      date: "4 Dec 2021",
      name: "Legend of Esperia",
      status: "New",
      view: 20,
      key: 5,
    },
    {
      date: "5 Dec 2021",
      name: "Legend of Esperia",

      status: "New",
      view: 20,
      key: 6,
    },
    {
      date: "6 Dec 2021",
      name: "The Resurging Flame | AFK Arena",
      status: "New",
      view: 20,
      key: 5,
    },
    {
      date: "19 Dec 2021",
      name: "The Resurging Flame | AFK Arena",
      status: "Hot",
      view: 20,
      key: 6,
    },
    {
      date: "22 Dec 2021",
      name: "The Resurging Flame | AFK Arena",
      status: "New",
      view: 20,
      key: 6,
    },
  ],
  Fantasy: [
    {
      date: "3 Dec 2021",
      status: "Hot",
      name: "Testing Manga",
      view: 19,
      key: 4,
    },
    {
      date: "4 Dec 2021",
      name: "GoMangan",
      status: "New",
      view: 20,
      key: 5,
    },
    {
      date: "5 Dec 2021",
      name: "Legend of Esperia",

      status: "New",
      view: 20,
      key: 6,
    },
  ],
  Adventure: [
    {
      date: "3 Dec 2021",
      status: "Hot",
      name: "The Resurging Flame | AFK Arena",
      view: 19,
      key: 4,
    },
    {
      date: "4 Dec 2021",
      name: "Legend of Esperia",
      status: "New",
      view: 20,
      key: 5,
    },
    {
      date: "5 Dec 2021",
      name: "Legend of Esperia",

      status: "New",
      view: 20,
      key: 6,
    },
  ],
};

const renderScene = ({ route }) => {
  switch (route.key) {
    case "Action":
      return <TabNewRelease data={data.Action} />;
    case "Fantasy":
      return <TabNewRelease data={data.Fantasy} />;
    case "Adventure":
      return <TabNewRelease data={data.Adventure} />;

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
export default function TabScrollNewRelease() {
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
