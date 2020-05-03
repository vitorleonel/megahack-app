import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DashboardScreen from "../screens/Dashboard";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator headerMode="float">
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  );
}
