import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Font } from "../../variable/Font";
import { Color } from "../../variable/Color";
import SearchTabBar from "../SearchScreen/SearchTabBar";
import SearchTitle from "../ProfileScreen/SearchTitle";
import SearchPopup from "./SearchPopup";
import MangaSearch from "../MangaList/MangaSearch";
//pop up login
class ReadingListPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      title: "",
      hideOnSearch: true,
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
              >
                <Text style={Font.baseTitle}>Edit</Text>
              </Pressable>
            </View>
          )}
          <SearchTitle hideOnSearch={this.hideOnSearch} test={12} />
          <View style={{ marginTop: 95 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
              }}
            >
              <Text style={Font.baseTitle}>1 title</Text>
              {this.state.hideOnSearch && (
                <Pressable style={{ flexDirection: "row" }}>
                  <Text style={Font.baseTitle}>Sort By: Last Added</Text>
                  <Entypo
                    name='chevron-down'
                    size={24}
                    color='white'
                    style={{ marginLeft: 5 }}
                  />
                </Pressable>
              )}
            </View>
            <View>
              <MangaSearch count_chapter={15} time_add='Added 19 March' />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    backgroundColor: Color.baseColor,
  },
});

export default ReadingListPopup;
