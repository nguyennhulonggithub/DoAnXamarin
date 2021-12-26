import React, { Component } from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Modal, Pressable } from "react-native";

import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import { AntDesign } from "@expo/vector-icons";
//pop up login

export default class SearchPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zIndex_search: 0,
    };
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
          style={{ height: 700 }}
        >
          <Text style={[Font.title]}>Quick Filters</Text>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Text style={[Font.baseTitle]}>Styles Origin</Text>
            <AntDesign
              name='questioncircleo'
              size={24}
              color='white'
              style={{ marginLeft: 10 }}
            />
          </View>
          <View
            style={{ flexWrap: "wrap", flexDirection: "row", marginTop: 10 }}
          >
            {this.Tags("hello")}
          </View>
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

    padding: 15,
  },
  tags: {
    backgroundColor: Color.baseColor,
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
  },
});
