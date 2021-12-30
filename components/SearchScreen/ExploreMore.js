import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Color } from "../../variable/Color";
import { Entypo } from "@expo/vector-icons";
import { Font } from "../../variable/Font";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ExploreMore() {
  function tab(icon, title, color, type) {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          paddingHorizontal: 15,
        }}
      >
        {type == "MaterialCommunityIcons" && (
          <MaterialCommunityIcons
            name={icon}
            size={30}
            color={color}
            style={{ marginRight: 20 }}
          />
        )}
        {type == "Ionicons" && (
          <Ionicons
            name={icon}
            size={30}
            color={color}
            style={{ marginRight: 20 }}
          />
        )}
        {type == "AntDesign" && (
          <AntDesign
            name={icon}
            size={30}
            color={color}
            style={{ marginRight: 20 }}
          />
        )}
        {type == "MaterialIcons" && (
          <MaterialIcons
            name={icon}
            size={30}
            color={color}
            style={{ marginRight: 20 }}
          />
        )}

        <View
          style={{
            width: "85%",
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              paddingBottom: 15,
              paddingTop: 2,
            }}
          >
            <Text style={Font.title}>{title}</Text>
            <Entypo name='chevron-right' size={24} color={Color.white} />
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "white",
              width: "100%",
              opacity: 0.2,
            }}
          ></View>
        </View>
      </View>
    );
  }
  return (
    <View>
      {tab("sword-cross", "Action", Color.blue, "MaterialCommunityIcons")}
      {tab("cards-heart", "Romance", "#ff3333", "MaterialCommunityIcons")}
      {tab("smile-circle", "Comedy", "yellow", "AntDesign")}
      {tab("star", "Fantasy", "#cc33ff", "AntDesign")}
      {tab("knife", "Horror", "orange", "MaterialCommunityIcons")}
      {tab(
        "md-checkmark-done-circle-outline",
        "Completed",
        "green",
        "Ionicons"
      )}
      {tab("money-off", "Free", "green", "MaterialIcons")}
    </View>
  );
}
