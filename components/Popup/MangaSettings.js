import React, { useState, useEffect, Component } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { server } from "../../variable/ServerName";
import { Color } from "../../variable/Color";
import Line from "../AllScreen/Line";

export default class MangaSetting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowing: false,
    };
  }

  render() {
    return (
      <View>
        <Modal visible={this.state.isShowing} animationType='slide' transparent>
          <Pressable
            style={{ flex: 3 }}
            onPress={() => this.setState({ isShowing: false })}
          />

          <View style={styles.container}>
            <Pressable
              onPress={() => this.setState({ isShowing: false })}
              style={{ position: "absolute", top: 20, right: 20 }}
            >
              <AntDesign name='closecircle' size={24} color={Color.gray} />
            </Pressable>
            <View style={styles.headerContainer}>
              <Image
                source={{ uri: server + this.props.image }}
                style={{ height: 50, width: 50, resizeMode: "cover" }}
              />
              <Text style={styles.name}>{this.props.name}</Text>
            </View>
            <Line />
            <View style={styles.bodyContainer}>
              <Pressable style={styles.row}>
                <MaterialCommunityIcons
                  name='book-open-variant'
                  size={24}
                  color='white'
                />
                <Text style={styles.title}>Read</Text>
              </Pressable>
              <Line />
              <Pressable style={styles.row}>
                <MaterialCommunityIcons
                  name='share-variant'
                  size={24}
                  color='white'
                />
                <Text style={styles.title}>Share</Text>
              </Pressable>
              <Line />
              <Pressable style={styles.row}>
                <MaterialCommunityIcons
                  name='calendar-plus'
                  size={24}
                  color='white'
                />
                <Text style={styles.title}>Add to Read Later</Text>
              </Pressable>
              <Line />
              <Pressable style={styles.row}>
                <AntDesign name='like1' size={24} color='white' />
                <Text style={styles.title}>Like</Text>
              </Pressable>
              <Line />
              <Pressable style={styles.row}>
                <AntDesign name='dislike1' size={24} color='white' />
                <Text style={styles.title}>Do not Recommend</Text>
              </Pressable>
              <Line />
              <Pressable style={styles.row}>
                <MaterialIcons name='people' size={24} color='white' />
                <Text style={styles.title}>Refer Friends</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#242422",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  row: {
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    paddingHorizontal: 15,

    marginVertical: 18,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginLeft: 30,
  },
  name: {
    color: "white",
    fontSize: 20,
    marginLeft: 30,
    marginVertical: 20,
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: Color.onBaseColor,
    marginTop: 20,
    borderRadius: 10,
  },
});
