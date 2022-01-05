import React, { Component } from "react";
import { Dimensions, Text, useWindowDimensions, View } from "react-native";
import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import LottieView from "lottie-react-native";
export default class LoadingChapter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  render() {
    const { width, height } = Dimensions.get("window");

    return (
      <View
        style={[
          {
            backgroundColor: Color.defaultColor,
            position: "absolute",
            top: 0,
            width: width,
            height: height,
            justifyContent: "center",
            alignItems: "center",
          },
          this.state.show && { elevation: 1 },
        ]}
      >
        {this.state.show && (
          <LottieView
            source={require("../../assets/white-loading.json")}
            autoPlay
          />
        )}
      </View>
    );
  }
}
