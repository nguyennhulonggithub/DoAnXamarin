import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Button,
} from "react-native";

const DATA = [
  {
    id: "0",
    title: "Zero",
  },
  {
    id: "1",
    title: "One",
  },
  {
    id: "2",
    title: "Two",
  },
  {
    id: "3",
    title: "Three",
  },
  {
    id: "4",
    title: "Four",
  },
  {
    id: "5",
    title: "Five",
  },
  {
    id: "6",
    title: "Six",
  },
  {
    id: "7",
    title: "Seven",
  },
  {
    id: "8",
    title: "Eight",
  },
  {
    id: "9",
    title: "Nine",
  },
  {
    id: "10",
    title: "Ten",
  },
];

export default class Test extends React.Component {
  flatListRef;

  constructor(props) {
    super(props);
    this.itemHeights = [];
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.flatListRef.scrollToIndex({
  //       animate: true,
  //       index: 6,
  //     });
  //   }, 300);
  // }
  getItemLayout = (data, index) => {
    let length = this.itemHeights[index];
    const offset = this.itemHeights.slice(0, index).reduce((a, c) => a + c, 0);

    if (!length) {
      length = 0;
    }
    return { length, offset, index };
  };

  rendeItem = ({ item, index }) => {
    const randomHeight = Math.floor(Math.random() * 250) + 50;
    return (
      <View
        style={[styles.item, { height: randomHeight }]}
        onLayout={(object) =>
          (this.itemHeights[index] = object.nativeEvent.layout.height)
        }
      >
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref={(ref) => {
            this.flatListRef = ref;
          }}
          data={DATA}
          renderItem={this.rendeItem}
          keyExtractor={(item) => item.id}
          getItemLayout={this.getItemLayout}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",
  },
  item: {
    backgroundColor: "#f9c2ff",
    borderWidth: 1,
    width: "100%",
  },
  title: {
    fontSize: 32,
  },
});
