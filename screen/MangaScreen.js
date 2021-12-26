import React from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Color } from "../variable/Color";
import { Font } from "../variable/Font";
import Chapter from "../components/MangaScreen/Chapter";
import Details from "../components/MangaScreen/Details";
import Header from "../components/MangaScreen/Header";

const Tab = createMaterialTopTabNavigator();

export default function MangaScreen({ navigation }) {
  return (
    <ScrollView style={[styles.container, { flex: 1 }]}>
      <Header />
      <NavigationContainer independent={true}>
        <Tab.Navigator
          style={{ height: 300 }}
          screenOptions={{
            tabBarStyle: { backgroundColor: "black" },
            tabBarLabelStyle: { color: "white" },
          }}
        >
          <Tab.Screen name='Chapter' component={Chapter} />
          <Tab.Screen name='Details' component={Details} />
        </Tab.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.backgroundColor,
    flex: 1,
  },
  text: {
    marginBottom: 10,
  },
});
