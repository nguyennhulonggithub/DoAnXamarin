import React, { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";

import Stats from "../AllScreen/Stats";

export default class ProfileList extends Component {
  render() {
    return (
      <Pressable style={styles.press}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Stats
            color={this.props.color}
            iconName={this.props.iconName}
            source={this.props.source}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Text style={Font.baseTitle}>{this.props.title}</Text>
          </View>
          <View style={{ flex: 1, paddingTop: 2 }}>
            <Text style={Font.description}>0 titles</Text>
          </View>
        </View>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  press: {
    borderRadius: 10,
    backgroundColor: Color.baseColor,
    height: "85%",
    width: "45%",

    flexDirection: "row",
  },
});
