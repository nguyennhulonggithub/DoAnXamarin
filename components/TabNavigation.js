import * as React from "react";
import { Text, View, StyleSheet, Image, Keyboard } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "../screen/HomeScreen";
import MangaScreen from "../screen/MangaScreen";
import SearchScreen from "../screen/SearchScreen";
import UpdateScreen from "../screen/UpdateScreen";
import ProfileScreen from "../screen/ProfileScreen";

//gọi hàm stack
const Stack = createNativeStackNavigator();

export function ScreenStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TabNavigation' component={Navigate} />
        <Stack.Screen name='MangaScreen' component={MangaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//gọi hàm tab navigator
const Tab = createBottomTabNavigator();

export function Navigate() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#272727",
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons name='home-filled' size={36} color='white' />
            </View>
          ),
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons name='search' size={36} color='white' />
            </View>
          ),
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons name='account-circle' size={36} color='white' />
            </View>
          ),
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name='Update'
        component={UpdateScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons name='notifications' size={36} color='white' />
            </View>
          ),
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  focusedIcon: {
    color: "#D7D7D7",
  },
  lazyIcon: {
    color: "#494949",
  },
});

export default ScreenStack;
