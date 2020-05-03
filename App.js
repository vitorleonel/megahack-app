import React from "react";
import { StatusBar } from "react-native";

import DashboardScreen from "./src/screens/Dashboard";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <DashboardScreen />
    </>
  );
}
