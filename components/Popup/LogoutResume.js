import React, { Component } from "react";
import { Text, View, StyleSheet, Modal, Button, Pressable } from "react-native";

import { Color } from "../../variable/Color";
import { Ionicons } from "@expo/vector-icons";
import { Font } from "../../variable/Font";
import Line from "../AllScreen/Line";

//pop up login
class LogoutResume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible,
    });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <Modal animationType={"none"} transparent={true} visible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.container}>
            <Text style={[Font.baseTitle, styles.heading]}>
              Clear reading progress on this device
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: Color.white,
                lineHeight: 20,
                padding: 15,
                paddingTop: 0,
              }}
            >
              This does not affect your data on cloud
            </Text>
            <Line />
            <Pressable
              style={{ paddingVertical: 10 }}
              onPress={() => this.props.acceptLogout(0)}
            >
              <Text style={Font.baseTitle}>Keep on this device</Text>
            </Pressable>
            <Line />
            <Pressable
              style={{ paddingVertical: 10 }}
              onPress={() => this.props.acceptLogout(1)}
            >
              <Text style={[Font.baseTitle, { color: "red" }]}>Clear All</Text>
            </Pressable>
            <Line />
            <Pressable
              style={{ paddingVertical: 10 }}
              onPress={() => this.setModalVisible(false)}
            >
              <Text style={[Font.baseTitle]}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Color.onBaseColor,
    height: 275,
    width: 270,
    borderRadius: 10,
  },
  successText: {
    color: Color.white,
    fontSize: 19,
    marginTop: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    lineHeight: 28,
  },
  heading: {
    textAlign: "center",
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 12,
    paddingTop: 0,
    marginTop: 20,
    fontWeight: "600",
  },
});

export default LogoutResume;
