import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DashboardScreen from "../screens/Dashboard";
import RepositoryScreen from "../screens/Repository";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator initialRouteName="Repository">
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen
        name="Repository"
        component={RepositoryScreen}
        options={{ title: "Repositório de produtos" }}
      />
    </Drawer.Navigator>
  );
}
