import axios from "axios";
import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";
import { deleteResume } from "../../InteractServer/ResumeSave";
import { InitialResume } from "../../redux/actions";

import { Color } from "../../variable/Color";
import { Font } from "../../variable/Font";
import { server } from "../../variable/ServerName";

//pop up login
class ConfirmManga extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      kind_action: "",
    };
  }

  setModalVisible = (visible, kind_action) => {
    this.setState({ modalVisible: visible, kind_action: kind_action });
  };
  kind_actionFunction(kind_action) {
    this.setState({ modalVisible: false });
    if (kind_action == "Remove this title from Read Later?") {
      axios.delete(server + "/read_later/delete", {
        data: {
          idUser: this.props.idUser,
          idManga: this.props.idManga,
        },
      });
      this.props.successLike("Remove from Read Later", "unreadlater");
    } else if (kind_action == "Undo Like?") {
      console.log("doing this");
      axios.delete(server + "/like/delete", {
        data: {
          idUser: this.props.idUser,
          idManga: this.props.idManga,
        },
      });

      this.props.successLike("Remove from Liked", "unlike");
    } else if (kind_action == "Unsubscribe?") {
      axios.delete(server + "/subscribe/delete", {
        data: {
          idUser: this.props.idUser,
          idManga: this.props.idManga,
        },
      });

      this.props.successLike("Remove from Subscribe", "unsubscribe");
    } else if ((kind_action = "Remove All Recently Read")) {
      if (this.props.userlog) {
      } else {
        deleteResume();
      }
      this.props.initialResume();
      this.props.successLike();
    }
  }
  render() {
    console.log(this.state.kind_action);
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
            <View
              style={{
                flex: 1,
                backgroundColor: Color.baseColor,
                position: "absolute",
                width: "100%",
                bottom: 0,
                paddingHorizontal: 10,
              }}
            >
              <Pressable
                style={styles.container}
                onPress={() => this.kind_actionFunction(this.state.kind_action)}
              >
                <Text style={[Font.baseTitle, { color: "red" }]}>
                  {this.state.kind_action}
                </Text>
              </Pressable>
              <Pressable
                style={styles.container}
                onPress={() => this.setModalVisible(false)}
              >
                <Text style={Font.baseTitle}>Cancel</Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.onBaseColor,
    width: "100%",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 14,
    borderRadius: 10,
    marginBottom: 5,
  },
});
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    initialResume: () => dispatch(InitialResume([])),
  };
};
export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  ConfirmManga
);
