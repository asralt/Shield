import "react-native-reanimated";
import React from "react";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "@/components/TabNavigation";






export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}