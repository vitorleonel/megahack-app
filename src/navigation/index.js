import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "../screens/Dashboard";
import StoreScreen from "../screens/Store";
import ProductScreen from "../screens/Product";
import RepositoryScreen from "../screens/Repository";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StoreGroup = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Store">
    <Stack.Screen name="Store" component={StoreScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
  </Stack.Navigator>
);

export default function Navigation() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />

      <Drawer.Screen
        name="StoreGroup"
        component={StoreGroup}
        options={{ title: "Minha Vitrine" }}
      />

      <Drawer.Screen
        name="Repository"
        component={RepositoryScreen}
        options={{ title: "Repositório de produtos" }}
      />
    </Drawer.Navigator>
  );
}
