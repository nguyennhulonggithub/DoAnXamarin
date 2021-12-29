import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { Component } from "react";
import { Font } from "../../variable/Font";
import { Feather } from "@expo/vector-icons";
import { Color } from "../../variable/Color";
import { Entypo } from "@expo/vector-icons";
import ChapterPopup from "../Popup/ChapterPopup";

export default class Linear extends Component {
  constructor(props) {
    super(props);
    this.refChapter = React.createRef();
    this.state = {
      linearVisible: false,
      timeout: null,
    };
  }

  setLinear = () => {
    this.setState({ linearVisible: !this.state.linearVisible }, () => {
      if (this.state.linearVisible) {
        const timeout = setTimeout(this.hideAfter, 2500);
        this.setState({ timeout: timeout });
      } else {
        clearTimeout(this.state.timeout);
      }
    });
  };
  hideAfter = () => {
    this.setState({ linearVisible: false });
  };
  hideLinear = () => {
    if (this.state.linearVisible) {
      this.setState({ linearVisible: false });
      clearTimeout(this.state.timeout);
    }
  };
  render() {
    return (
      <LinearGradient
        // Background Linear Gradient
        colors={["#050505", "#403f3f", "rgba(255, 255, 255, 0)"]}
        style={[
          styles.linear,
          { opacity: this.state.linearVisible ? 0.95 : 0 },
        ]}
      >
        <Text style={styles.title}>BIKINGS</Text>
        <Pressable
          onPress={() => {
            clearTimeout(this.state.timeout);
            this.refChapter.current.setModalVisible(true);
          }}
          style={styles.description}
        >
          <Text style={[Font.baseTitle, { fontSize: 14 }]}>
            Vol.1 Stage.3: ProloGue{" "}
            <Text style={{ fontSize: 12, fontWeight: "600" }}> &#x2228;</Text>
          </Text>
        </Pressable>
        <Pressable style={[styles.circle, { left: 30 }]}>
          <Feather name='x' size={18} color='white' />
        </Pressable>
        <Pressable style={[styles.circle, { right: 30 }]}>
          <Entypo name='dots-three-horizontal' size={18} color='white' />
        </Pressable>
        <ChapterPopup ref={this.refChapter} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linear: {
    width: "100%",
    height: 200,
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  title: {
    position: "absolute",
    top: 65,
    left: 20,
    fontSize: 20,
    color: "white",
  },
  description: {
    position: "absolute",
    top: 95,
    left: 20,
  },
  circle: {
    position: "absolute",
    top: 25,
    backgroundColor: Color.baseColor,
    borderRadius: 12,
    padding: 3,
  },
});
