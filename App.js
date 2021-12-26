import React, { Component } from "react";

import Test from "./screen/Test";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigation from "./components/TabNavigation";
import TabScrollNewRelease from "./components/SearchScreen/TabScrollNewRelease";
import SearchPopup from "./components/Popup/SearchPopup";

//checkout
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>

      // <Test />
    );
  }
}
