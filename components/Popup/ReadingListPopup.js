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

import MangaSearch from "../MangaList/MangaSearch";
import { Ionicons } from "@expo/vector-icons";
//pop up login
class ReadingListPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      title: "",
      hideOnSearch: true,
      data: [],
    };
    this.height = Dimensions.get("window").height;
  }

  setModalVisible = (visible, title, data) => {
    this.setState({
      modalVisible: visible,
      title: title,
      data: data,
    });
  };
  hideOnSearch = (visible) => {
    this.setState({
      hideOnSearch: visible,
    });
  };
  render() {
    console.log(this.state.data);
    const { modalVisible } = this.state;
    return (
      <Modal
        animationType={"slide"}
        visible={modalVisible}
        statusBarTranslucent
      >
        <View style={[styles.header]}>
          {this.props.userlog ? (
            <View>
              {this.state.hideOnSearch && (
                <View
                  style={{
                    alignItems: "center",
                    paddingTop: 25,
                  }}
                >
                  <Pressable
                    style={{ position: "absolute", left: 15, paddingTop: 25 }}
                    onPress={() => this.setState({ modalVisible: false })}
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
              {/* <SearchTitle hideOnSearch={this.hideOnSearch} test={12} /> */}
              <View style={{ marginTop: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 15,
                  }}
                >
                  <Text style={Font.baseTitle}>
                    {this.state.data.length} titles
                  </Text>
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
          ) : (
            <View
              style={{ height: "100%", width: "100%", alignItems: "center" }}
            >
              <Pressable
                style={{ position: "absolute", left: 15, paddingTop: 25 }}
                onPress={() => this.setState({ modalVisible: false })}
              >
                <Entypo name='chevron-down' size={24} color='white' />
              </Pressable>

              <Text style={[Font.title, { marginTop: 25 }]}>
                {this.state.title}
              </Text>
              <View
                style={{
                  height: "90%",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name='person-add-outline' size={70} color='white' />
                <Text style={[Font.baseTitle, { marginVertical: 20 }]}>
                  Please Sign in to have more features
                </Text>
                <Pressable
                  style={{
                    alignItems: "center",
                    width: "90%",
                    backgroundColor: Color.onBaseColor,
                    padding: 10,
                    borderRadius: 10,
                  }}
                  onPress={() => this.props.signIn()}
                >
                  <Text style={Font.baseTitle}>+ Sign in</Text>
                </Pressable>
              </View>
            </View>
          )}
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
