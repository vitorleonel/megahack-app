import React from "react";
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import Constants from "expo-constants";

import { NavBar, Block, Text, Icon } from "galio-framework";
import {
  VictoryGroup,
  VictoryChart,
  VictoryBar,
  VictoryLine,
  VictoryPie,
  VictoryLegend,
  VictoryLabel,
  VictoryAxis,
} from "victory-native";
import { Svg, Defs, LinearGradient, Stop } from "react-native-svg";

const { width, height } = Dimensions.get("window");

export default function Dashboard({ navigation }) {
  return (
    <ImageBackground
      source={require("../../images/profile-screen-bg.png")}
      style={styles.container}
      imageStyle={styles.imageContainer}
    >
      <NavBar
        title="Dashboard"
        transparent
        titleStyle={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" }}
        left={
          <Icon
            name="menu"
            family="Feather"
            size={24}
            color="#ffffff"
            onPress={() => navigation.toggleDrawer()}
          />
        }
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Block shadow style={[styles.card, styles.profile]}>
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            }}
            style={styles.profileImage}
          />

          <Block alignSelf="center" style={{ marginBottom: 24 }}>
            <Text
              size={24}
              color="#32325D"
              bold
              style={{ textAlign: "center" }}
            >
              Mariana Silveira
            </Text>
            <Text size={16} color="#32325D" style={{ textAlign: "center" }}>
              Ribeirão Preto - SP
            </Text>
          </Block>

          <Block row style={[styles.profileCardGroup, { marginBottom: 8 }]}>
            <Block flex middle style={[styles.profileCard]}>
              <Text color="white" size={20} bold style={styles.textCenter}>
                R$ 25,00
              </Text>
              <Text color="white" style={[styles.textCenter, { marginTop: 4 }]}>
                Comissão à receber
              </Text>
            </Block>

            <Block flex middle style={[styles.profileCard]}>
              <Text color="white" size={20} bold style={styles.textCenter}>
                25
              </Text>
              <Text color="white" style={[styles.textCenter, { marginTop: 4 }]}>
                Produtos na vitrine
              </Text>
            </Block>
          </Block>

          <Block row style={styles.profileCardGroup}>
            <Block
              flex
              middle
              style={[styles.profileCard, styles.profileCardBlue]}
            >
              <Text color="white" size={20} bold style={styles.textCenter}>
                115
              </Text>
              <Text color="white" style={[styles.textCenter, { marginTop: 4 }]}>
                Total de vendas
              </Text>
            </Block>

            <Block
              flex
              middle
              style={[styles.profileCard, styles.profileCardBlue]}
            >
              <Text color="white" size={20} bold style={styles.textCenter}>
                R$ 425,00
              </Text>
              <Text color="white" style={[styles.textCenter, { marginTop: 4 }]}>
                Total de comissão
              </Text>
            </Block>
          </Block>
        </Block>

        <Block shadow style={[styles.card, { padding: 0 }]}>
          <Text color="#525F7F" bold size={16} style={{ padding: 16 }}>
            Relatorio de vendas nos últimos 6 meses
          </Text>

          <VictoryChart
            width={width - 40}
            padding={{ bottom: 48, left: 32, right: 32, top: 48 }}
          >
            <VictoryAxis
              style={{
                axis: { stroke: "none" },
                tickLabels: {
                  stroke: "#999FBF",
                  fontWeight: 100,
                },
              }}
              crossAxis
            />

            <VictoryBar
              barWidth={10}
              cornerRadius={{ top: 5, bottom: 5 }}
              alignment="start"
              style={{
                data: { fill: "#FF5959" },
              }}
              labels={(value) => `${parseFloat(value.datum.y)}k`}
              data={[
                { x: "Jan", y: 1 },
                { x: "Fev", y: 7.5 },
                { x: "Mar", y: 10.0 },
                { x: "Abr", y: 3.0 },
                { x: "Mai", y: 16.0 },
                { x: "Jun", y: 3.0 },
              ]}
            />
          </VictoryChart>
        </Block>

        <Block shadow style={[styles.card, { padding: 0 }]}>
          <Text color="#525F7F" bold size={16} style={{ padding: 16 }}>
            Estoque x vendas realizadas nos últimos 6 meses
          </Text>

          <Svg width={width / 1.25} height={width / 1.25}>
            <VictoryLegend
              width={width - 20}
              x={40}
              y={8}
              orientation="horizontal"
              data={[
                { name: "Vendas realizadas", symbol: { fill: "#2ED47A" } },
                { name: "Estoque total", symbol: { fill: "#FFB946" } },
              ]}
            />

            <VictoryPie
              width={width / 1.125}
              height={width / 1.15}
              innerRadius={80}
              colorScale={["#2ED47A", "#FFB946"]}
              labels={() => null}
              data={[10, 3]}
            />

            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: 56, fill: "#2ED47A" }}
              x={width / 1.125 / 2}
              y={width / 1.15 / 2}
              text={`${(10 / 13).toFixed(2) * 100}%`}
            />
          </Svg>
        </Block>

        <Block shadow style={[styles.card, { padding: 0 }]}>
          <Text color="#525F7F" bold size={16} style={{ padding: 16 }}>
            Produtos ativos nos últimos 6 meses
          </Text>

          <VictoryGroup
            width={width - 40}
            domainPadding={{ y: 32, x: 16 }}
            padding={{ bottom: 48, left: 16, right: 16, top: 24 }}
          >
            <Defs>
              <LinearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                <Stop offset="0%" stopColor="#109CF1" stopOpacity="0.2" />
                <Stop offset="100%" stopColor="#109CF1" stopOpacity="0.005" />
              </LinearGradient>
            </Defs>

            <VictoryChart>
              <VictoryAxis
                style={{
                  axis: { stroke: "none" },
                  tickLabels: {
                    stroke: "#999FBF",
                    fontWeight: 100,
                  },
                }}
                crossAxis
              />

              <VictoryLine
                interpolation="natural"
                style={{
                  data: {
                    stroke: "#109CF1",
                    fill: "url(#grad)",
                  },
                }}
                labels={(value) => value.datum.y}
                data={[
                  { x: "Jan", y: 10 },
                  { x: "Fev", y: 34 },
                  { x: "Mar", y: 20 },
                  { x: "Abr", y: 29 },
                  { x: "Mai", y: 16 },
                  { x: "Jun", y: 10 },
                ]}
              />
            </VictoryChart>
          </VictoryGroup>
        </Block>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },

  imageContainer: {
    width,
    height: height / 1.25,
  },

  card: {
    padding: 16,
    backgroundColor: "#ffffff",
    marginBottom: 24,
    marginHorizontal: 16,
    borderRadius: 6,
    elevation: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f1f2f6",
  },

  profile: {
    marginTop: 86,
  },

  profileImage: {
    width: 112,
    height: 112,
    borderRadius: 64,
    alignSelf: "center",
    marginTop: -72,
    marginBottom: 16,
  },

  profileCardGroup: {
    margin: -8,
  },

  profileCard: {
    padding: 12,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#2DCE89",
  },

  profileCardBlue: {
    backgroundColor: "#4CB5FF",
  },

  // utils
  textCenter: {
    textAlign: "center",
  },
});
