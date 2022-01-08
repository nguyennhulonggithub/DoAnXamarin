import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
  FlatList,
} from "react-native";

import { Font } from "../../variable/Font";
import { Color } from "../../variable/Color";

import SearchTitle from "../ProfileScreen/SearchTitle";

import MangaSearch from "../MangaList/MangaSearch";
import { Entypo } from "@expo/vector-icons";
import ResumeReading from "../HomeScreen/ResumeReading";
import ResumeTag from "../MangaList/ResumeTag";
import ResumeList from "../MangaList/ResumeList";
import ConfirmManga from "./ConfirmManga";
import SuccessLike from "./SuccessLike";
//pop up login
class ReadingHistory extends Component {
  constructor(props) {
    super(props);
    this.refConfirmManga = React.createRef();
    this.refSuccessLike = React.createRef();
    this.state = {
      modalVisible: false,
      title: "",
      hideOnSearch: true,
      data: [],
    };
    this.height = Dimensions.get("window").height;
  }

  setModalVisible = (visible, title) => {
    this.setState({
      modalVisible: visible,
      title: title,
    });
  };
  hideOnSearch = (visible) => {
    this.setState({
      hideOnSearch: visible,
    });
  };
  render() {
    const { modalVisible } = this.state;
    return (
      <Modal
        animationType={"slide"}
        visible={modalVisible}
        statusBarTranslucent
      >
        <View style={[styles.header]}>
          {this.state.hideOnSearch && (
            <View
              style={{
                alignItems: "center",
                paddingTop: 25,
              }}
            >
              <Pressable
                style={{ position: "absolute", left: 15, paddingTop: 25 }}
                onPress={() => this.setModalVisible(false)}
              >
                <Entypo name='chevron-down' size={24} color='white' />
              </Pressable>

              <Text style={Font.title}>{this.state.title}</Text>
              <Pressable
                style={{ position: "absolute", right: 15, paddingTop: 25 }}
                onPress={() =>
                  this.refConfirmManga.current.setModalVisible(
                    true,
                    "Remove All Recently Read"
                  )
                }
              >
                <Entypo name='dots-three-horizontal' size={24} color='white' />
              </Pressable>
            </View>
          )}

          <View style={{ marginTop: 20 }}>
            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item.chapterId}
              renderItem={({ item }) => {
                return (
                  <ResumeList
                    data_resume={item}
                    navigation={this.props.navigation}
                    hideReadingHistory={() =>
                      this.setState({ modalVisible: false })
                    }
                  />
                );
              }}
            />
          </View>
          <SuccessLike ref={this.refSuccessLike} />
          <ConfirmManga
            ref={this.refConfirmManga}
            userlog={this.props.userlog}
            successLike={() =>
              this.refSuccessLike.current.setModalVisible(
                "Remove all from Resume Reading",
                "resume"
              )
            }
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    backgroundColor: Color.mangaColor,
    paddingTop: 10,
  },
});

export default ReadingHistory;
