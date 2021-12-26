import React, { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default class ProfileList extends Component {
  render() {
    return (
      <Pressable style={styles.press}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={[styles.circle, { backgroundColor: this.props.color }]}>
            {this.props.source == "awesome5" ? (
              <FontAwesome5
                name={this.props.iconName}
                size={18}
                color='white'
              />
            ) : (
              <AntDesign name={this.props.iconName} size={18} color='white' />
            )}
          </View>
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
  circle: {
    width: 34,
    height: 34,

    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
});
