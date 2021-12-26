import React, { Component } from "react";
import { Text, View, StyleSheet, Modal } from "react-native";

import { Color } from "../../variable/Color";
import { Ionicons } from "@expo/vector-icons";

//pop up login
class OnSuccessPopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      type: true,
    };
  }

  setModalVisible = (type) => {
    this.setState({
      modalVisible: true,
      type: type,
    });
    setTimeout(() => {
      this.setState({ modalVisible: false });
    }, 1500);
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <Modal animationType={"fade"} transparent={true} visible={modalVisible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.container}>
            {this.state.type ? (
              <Ionicons name='person-add-sharp' size={70} color='white' />
            ) : (
              <Ionicons
                name='person-remove-sharp'
                size={70}
                color={Color.white}
              />
            )}

            <Text style={styles.successText}>
              {this.state.type
                ? "Successfully Login"
                : "Successfully Signed out"}
            </Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.baseColor,
    height: 200,
    width: 200,
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

export default OnSuccessPopUp;
