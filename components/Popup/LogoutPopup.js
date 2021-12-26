import React, { Component } from "react";
import { Text, View, StyleSheet, Modal, Button, Pressable } from "react-native";

import { Color } from "../../variable/Color";
import { Ionicons } from "@expo/vector-icons";
import { Font } from "../../variable/Font";

//pop up login
class LogoutPopup extends Component {
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
            <Text
              style={[
                Font.baseTitle,
                {
                  textAlign: "center",
                  paddingLeft: 25,
                  paddingRight: 25,
                  paddingBottom: 17,
                  paddingTop: 0,
                  marginTop: 20,
                },
              ]}
            >
              Are you sure you want to sign out?
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: Color.white,
                lineHeight: 22,
                padding: 15,
                paddingTop: 0,
              }}
            >
              All data in your Downloaded, Read Later Subscribed, Liked and
              Disliked lists will be removed from this device.
            </Text>
            <View
              style={{
                backgroundColor: "white",
                height: 0.5,
                width: "100%",
                marginTop: 10,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Pressable onPress={() => this.setState({ modalVisible: false })}>
                <Text
                  style={{
                    fontSize: 17,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Cancel
                </Text>
              </Pressable>
              <View
                style={{ backgroundColor: "white", height: 40, width: 0.5 }}
              ></View>
              <Pressable
                onPress={() => {
                  this.props.onLogout();
                  this.setState({ modalVisible: false });
                }}
              >
                <Text style={{ fontSize: 17, color: "white" }}>Sign Out</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Color.baseColor,
    height: 220,
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
});

export default LogoutPopup;
