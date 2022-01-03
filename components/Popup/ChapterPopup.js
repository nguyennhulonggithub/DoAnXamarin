import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
} from "react-native";

import { Color } from "../../variable/Color";
import { Ionicons } from "@expo/vector-icons";
import { Font } from "../../variable/Font";
import { Entypo } from "@expo/vector-icons";
import Chaps from "../AllScreen/Chaps";
//pop up login

const data = [
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 1",
    status: "free",
    key: 1,
  },
  {
    image: "../../assets/genre/romance.png",
    name: "Chapter 2",
    status: "free",
    key: 2,
  },
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 3",
    status: "paid",
    key: 3,
  },
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 1",
    status: "free",
    key: 4,
  },
  {
    image: "../../assets/genre/romance.png",
    name: "Chapter 2",
    status: "free",
    key: 5,
  },
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 3",
    status: "paid",
    key: 6,
  },
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 1",
    status: "free",
    key: 7,
  },
  {
    image: "../../assets/genre/romance.png",
    name: "Chapter 2",
    status: "free",
    key: 8,
  },
  {
    image: "../../assets/genre/action.png",
    name: "Chapter 3",
    status: "paid",
    key: 9,
  },
];
class ChapterPopup extends Component {
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
      <Modal animationType={"slide"} transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={{
            justifyContent: "flex-end",
            flex: 1,
          }}
          activeOpacity={1}
          onPressOut={() => {
            this.setModalVisible(false);
          }}
        >
          <TouchableWithoutFeedback>
            <View style={styles.outsideContainer}>
              <View style={styles.container}>
                <Text style={Font.title}>Jump to Chapter</Text>
                <Pressable
                  style={styles.circle}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Entypo name='chevron-down' size={24} color='white' />
                </Pressable>
              </View>
              <View style={styles.line} />
              <ScrollView>
                <Chaps data={this.props.dataChapter} />
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  outsideContainer: {
    height: "80%",
    width: "100%",
    backgroundColor: Color.baseColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    backgroundColor: Color.mangaColor,
    borderRadius: 15,
    padding: 3,
  },
  line: {
    width: "100%",
    height: 0.8,
    backgroundColor: "white",
    opacity: 0.2,
  },
});

export default ChapterPopup;
