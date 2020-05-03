import React from "react";
import Constants from "expo-constants";

import {
  StyleSheet,
  Image,
  Dimensions,
  Share,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Block, Text, NavBar, Icon } from "galio-framework";
import { useFocusEffect } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function Store({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  );

  async function onShare() {
    try {
      await Share.share({
        message: "Capa de celular Galaxy Note",
      });
    } catch (error) {}
  }

  return (
    <Block flex style={styles.container}>
      <NavBar
        title="Capa de celular Galaxy Note"
        titleStyle={{ fontSize: 18, fontWeight: "bold", color: "#5E72E4" }}
        left={
          <Icon
            name="arrow-left"
            family="Feather"
            size={24}
            color="#5E72E4"
            onPress={() => navigation.goBack()}
          />
        }
        right={
          <Icon name="share" family="Feather" size={22} onPress={onShare} />
        }
      />

      <Block style={styles.content}>
        <Block shadow shadowAndroid style={styles.card}>
          <Image
            style={styles.productImage}
            source={{
              uri:
                "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            }}
          />

          <Text style={styles.productDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>

          <Text bold h4>
            R$ 50,00
          </Text>

          <Block row style={styles.buttons}>
            <TouchableOpacity activeOpacity={0.75} style={styles.buttonsItem}>
              <Text style={styles.buttonsItemText}>Comprar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.75}
              style={[styles.buttonsItem, styles.buttonsItemCart]}
            >
              <Text
                style={[styles.buttonsItemText, styles.buttonsItemCartText]}
              >
                Adicionar carrinho
              </Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingTop: Constants.statusBarHeight,
  },

  content: {
    flex: 1,
    backgroundColor: "#dfe4ea",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 6,
  },

  productImage: {
    width: width - 64,
    height: (width - 64) / 1.5,
    marginBottom: 16,
  },

  productDescription: {
    fontSize: 16,
    color: "#8F9090",
    lineHeight: 20,
    textAlign: "justify",
    marginBottom: 16,
  },

  buttons: {
    marginTop: 24,
    marginHorizontal: -8,
  },

  buttonsItem: {
    flex: 1,
    height: 44,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: "#5E72E4",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonsItemText: {
    fontSize: 16,
    color: "#ffffff",
  },

  buttonsItemCart: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#5E72E4",
  },

  buttonsItemCartText: {
    color: "#5E72E4",
  },
});
