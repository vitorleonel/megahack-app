import React from "react";
import Constants from "expo-constants";

import {
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { Block, Text, NavBar, Icon, Input, Button } from "galio-framework";

const { width } = Dimensions.get("window");

export default function Repository({ navigation }) {
  return (
    <Block flex style={styles.container}>
      <NavBar
        title="Repositório de produtos"
        titleStyle={{ fontSize: 18, fontWeight: "bold", color: "#5E72E4" }}
        left={
          <Icon
            name="menu"
            family="Feather"
            size={24}
            color="#5E72E4"
            onPress={() => navigation.toggleDrawer()}
          />
        }
      />

      <Block shadow style={styles.filters}>
        <Input
          placeholder="Procutar produtos"
          right
          icon="search"
          family="Feather"
          style={styles.filtersSearchInput}
        />

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.filtersButtons}
        >
          {[
            ["Tecnologia", "Alimentos", "Vestuário"].map((value, index) => (
              <Button
                shadowless
                size="small"
                style={[
                  styles.filtersButton,
                  index === 0 && styles.filtersButtonFirst,
                ]}
                key={value}
              >
                {value}
              </Button>
            )),
          ]}
        </ScrollView>
      </Block>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={() => String(Math.random())}
        style={styles.products}
        contentContainerStyle={styles.productsContent}
        numColumns={2}
        renderItem={() => (
          <Block style={styles.product}>
            <Image
              style={styles.productImage}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
              }}
            />

            <Block center>
              <Text style={styles.productButton}>Adicionar à vitrine</Text>

              <Icon
                name="plus-circle"
                family="Feather"
                size={24}
                color="#5E72E4"
              />
            </Block>
          </Block>
        )}
      />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingTop: Constants.statusBarHeight,
  },

  filters: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  filtersSearchInput: {
    borderColor: "#CAD1D7",
  },

  filtersButtons: {
    marginTop: 8,
    marginHorizontal: -16,
  },

  filtersButton: {
    backgroundColor: "#bdc3c7",
    marginRight: 16,
  },

  filtersButtonFirst: {
    marginLeft: 16,
    backgroundColor: "#5E72E4",
  },

  products: {
    backgroundColor: "#dfe4ea",
  },

  productsContent: {
    padding: 8,
  },

  product: {
    width: width / 2 - 24,
    backgroundColor: "#ffffff",
    margin: 8,
    padding: 16,
    borderRadius: 6,
  },

  productImage: {
    width: width / 2 - 24 - 32,
    height: 96,
    marginBottom: 16,
  },

  productButton: {
    fontSize: 16,
    marginBottom: 8,
  },
});
