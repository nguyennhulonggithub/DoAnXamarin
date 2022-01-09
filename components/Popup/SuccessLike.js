import React, { Component } from "react";
import { Text, View, StyleSheet, Modal } from "react-native";

import { Color } from "../../variable/Color";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//pop up login
class SuccessLike extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      text: "",
      type: "",
    };
  }

  setModalVisible = (text, type) => {
    this.setState({
      modalVisible: true,
      type: type,
      text: text,
    });
    setTimeout(() => {
      this.setState({ modalVisible: false });
    }, 1000);
  };
  typeFunction = (value) => {
    switch (value) {
      case "like":
        return <AntDesign name='like2' size={70} color='white' />;
      case "unlike":
        return <AntDesign name='dislike2' size={70} color='white' />;
      case "subscribe":
        return <FontAwesome name='bell-o' size={70} color='white' />;
      case "unsubscribe":
        return <FontAwesome name='bell-slash-o' size={70} color='white' />;
      case "readlater":
        return (
          <MaterialCommunityIcons name='tag-outline' size={70} color='white' />
        );
      case "purchase":
        return <MaterialIcons name='attach-money' size={70} color='white' />;
      case "unreadlater":
        return (
          <MaterialCommunityIcons
            name='tag-minus-outline'
            size={70}
            color='white'
          />
        );
      case "resume":
        return (
          <MaterialCommunityIcons
            name='calendar-remove-outline'
            size={70}
            color='white'
          />
        );
      default:
        return (
          <MaterialCommunityIcons
            name='calendar-remove-outline'
            size={70}
            color='white'
          />
        );
    }
  };
  render() {
    const { modalVisible } = this.state;
    return (
      <Modal animationType={"fade"} transparent={true} visible={modalVisible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.container}>
            {this.typeFunction(this.state.type)}
            <Text style={styles.successText}>{this.state.text}</Text>
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

export default SuccessLike;
