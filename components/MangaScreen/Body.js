import * as React from "react";
import { useWindowDimensions, Text } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { Color } from "../../variable/Color";
import Chapter from "./Chapter";
import Detail from "./Detail";

export default function Body({
  data,
  translate,
  navigation,
  showLogin,
  dataHeader,
  confirmPurchase,
}) {
  const {
    Status,
    Summary,
    Likes,
    Subscribes,
    TotalView,
    Name,
    Genre,
    ImageAPI,
  } = dataHeader;

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, fontSize: 16 }}>{route.title}</Text>
      )}
      style={{
        backgroundColor: Color.baseColor,
        borderBottomColor: "#aba7a7",
        borderBottomWidth: 0.5,
        position: "absolute",
        top: 0,
        height: 50,
        width: "100%",
        transform: [{ translateY: translate }],
      }}
      indicatorStyle={{ backgroundColor: "white" }}
    />
  );
  const renderScene = ({ route }) => {
    switch (route.key) {
      case "Chapter":
        return (
          <Chapter
            data={data}
            status={Status}
            index={index}
            mangaTitle={Name}
            navigation={navigation}
            mangaImage={ImageAPI}
            showLogin={showLogin}
            confirmPurchase={confirmPurchase}
          />
        );
      case "Detail":
        return (
          <Detail
            index={index}
            like={Likes}
            subscribe={Subscribes}
            summary={Summary}
            read={TotalView}
            genre={Genre}
          />
        );

      default:
        return null;
    }
  };
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Chapter", title: "Chapter" },
    { key: "Detail", title: "Detail" },
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
