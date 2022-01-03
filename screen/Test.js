import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { View, Text, Button, Animated } from "react-native";

export default function Test() {
  const change_width = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(change_width, {
      toValue: 1000,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [change_width]);
  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          backgroundColor: "red",
          width: change_width,
          height: 100,
          marginTop: 300,
        }}
      ></Animated.View>
      <Button
        title='test'
        onPress={() => {
          Animated.timing(change_width, {
            toValue: 150,
            duration: 3000,
            useNativeDriver: false,
          }).start();
        }}
      ></Button>
    </View>
  );
}
