import React from "react";
import { View, Text } from "react-native";
import Body from "./Body";
import { useSelector } from "react-redux";
export default function ContainerBody({
  data,
  dataHeader,
  translate,
  navigation,
  showLogin,
  confirmPurchase,
}) {
  return (
    <View
      style={{
        height: 50 + useSelector((state) => state.height),
        width: "100%",
      }}
    >
      <Body
        data={data}
        dataHeader={dataHeader}
        translate={translate}
        navigation={navigation}
        showLogin={showLogin}
        confirmPurchase={confirmPurchase}
      />
    </View>
  );
}
