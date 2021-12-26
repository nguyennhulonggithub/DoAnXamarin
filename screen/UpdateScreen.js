import React, { Component } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import ModelPopup from "../components/Popup/ModelPopup";
import {
  deleteUser,
  getdata,
  insertUser,
} from "../InteractServer/GetUserSqlite";
import { baseThing } from "../variable/BaseThing";
import { Color } from "../variable/Color";
import { Font } from "../variable/Font";

export default class UpdateScreen extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      userLogin: false,
    };
  }
  componentDidMount() {
    this.props.navigation.addListener("tabPress", (e) => {
      this.getUserInfo();
    });
    this.getUserInfo();
  }
  getUserInfo = () => {
    getdata().then((res) => {
      if (res) {
        this.setState({ userLogin: true });
      } else {
        this.setState({ userLogin: false });
      }
    });
  };
  loginInfomation() {
    if (this.state.userLogin == true) {
      return (
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={[Font.description, { textAlign: "center" }]}>
            There isn't update right now
          </Text>
        </View>
      );
    } else {
      return (
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={[Font.description, { textAlign: "center" }]}>
            Sign in to get new chapter updates from titles you're reading
          </Text>
          <Pressable
            style={[
              baseThing.button,
              {
                backgroundColor: Color.baseColor,
                marginVertical: 20,
              },
            ]}
            onPress={() => this.myRef.current.setModalVisible(true)}
          >
            <Text style={Font.baseTitle}>+ Sign In</Text>
          </Pressable>
          <Text style={[Font.description, { textAlign: "center" }]}>
            Learn more about IKKN account
          </Text>
        </View>
      );
    }
  }
  changeLoginInfo = (login) => {
    this.setState({ userLogin: login });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: "100%", height: 200, alignItems: "center" }}>
          <Image
            source={require("../assets/Resume.png")}
            style={{
              resizeMode: "contain",
              height: 200,
              width: "80%",
            }}
          />
        </View>
        {this.loginInfomation()}

        <ModelPopup ref={this.myRef} onLoginSuccess={this.changeLoginInfo} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.defaultColor,
    flex: 1,
  },
});
