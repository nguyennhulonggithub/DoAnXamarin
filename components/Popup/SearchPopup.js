import React, { Component } from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Pressable,
  FlatList,
} from "react-native";

import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import { AntDesign } from "@expo/vector-icons";
import LoadingChapter from "../ChapterScreen/LoadingChapter";
import { TabBarItem } from "react-native-tab-view";
import SearchTags from "../SearchScreen/SearchTags";
import Line from "../AllScreen/Line";
//pop up login

export default class SearchPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zIndex_search: 0,
    };
    this.refLoading = React.createRef();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading) {
      if (this.props.loading) {
        this.refLoading.current.setState({ show: true });
      } else {
        this.refLoading.current.setState({ show: false });
      }
    }
  }
  setModalVisible = (_zindex) => {
    this.setState({ zIndex_search: _zindex });
  };

  Tags = (text) => {
    return <Text style={[Font.baseTitle, styles.tags]}>{text}</Text>;
  };
  render() {
    return (
      <View
        style={[styles.search_background, { zIndex: this.state.zIndex_search }]}
      >
        <Pressable
          onPress={() => {
            this.props.remove_focus();
          }}
          style={{ height: 500 }}
        >
          <LoadingChapter ref={this.refLoading} height={500} />
          <FlatList
            data={this.props.data}
            keyExtractor={(item, index) => item.idManga}
            renderItem={({ item }) => {
              console.log(item);
              return (
                <View>
                  <SearchTags data={item} navigation={this.props.navigation} />
                  <Line />
                </View>
              );
            }}
          />
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search_background: {
    width: "100%",
    height: 700,
    backgroundColor: Color.defaultColor,
    position: "absolute",
    top: 100,
  },
  tags: {
    backgroundColor: Color.baseColor,
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
  },
});
