import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Component } from "react";
import { Color } from "../../variable/Color";
import { AntDesign } from "@expo/vector-icons";

export default class NavigateButton extends Component {
  constructor(props) {
    super(props);
    this.refChapter = React.createRef();
    this.state = {
      linearVisible: false,
      timeout: null,
    };
    const { dataChapter, changeData, saveOrder } = this.props;
  }
  componentWillUnmount() {
    this.setState = () => {
      return;
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
    const { changeData, saveOrder, dataChapter } = this.props;

    return (
      <View
        style={[
          styles.linear,
          this.state.linearVisible && { opacity: 0.95, zIndex: 3 },
        ]}
      >
        <Pressable
          style={styles.pressButton}
          onPress={() => {
            if (saveOrder != 1) {
              changeData(
                dataChapter[saveOrder - 2].idChapter,
                dataChapter[saveOrder - 2].Name,
                saveOrder - 1
              );
            }
          }}
        >
          <AntDesign name='arrowup' size={20} color='white' />
        </Pressable>
        <Pressable
          style={styles.pressButton}
          onPress={() => {
            if (saveOrder != dataChapter.length) {
              changeData(
                dataChapter[saveOrder].idChapter,
                dataChapter[saveOrder].Name,
                saveOrder + 1
              );
            }
          }}
        >
          <AntDesign name='arrowdown' size={20} color='white' />
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linear: {
    width: 30,
    height: 410,
    position: "absolute",
    top: 155,
    right: 30,
    opacity: 0,
    zIndex: 0,
    justifyContent: "space-between",
    elevation: 2,
  },
  pressButton: {
    backgroundColor: Color.defaultColor,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
