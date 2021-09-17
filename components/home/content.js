import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import * as TColor from "../../theme/colors";
const bobbas = require("../../sources/bobbas.json");

export default function Content() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.headWrapper}>
          <Text style={styles.headText}>Popular Sweeties</Text>
          <Text style={styles.headAnchor}>See all</Text>
        </View>
        {/* products */}
        {bobbas.map((product, index) => (
          <Bobba data={product} index={index} />
        ))}
      </View>
    </View>
  );
}

function Bobba(props) {
  let bobba = props.data;
  let backgroundColors = [TColor.darkBlue, TColor.lightPurple, TColor.orange];
  let colorIndex = props.index % backgroundColors.length;

  return (
    <View
      key={props.index}
      style={[
        bobbaStyles.wrapper,
        {
          backgroundColor: backgroundColors[colorIndex],
        },
      ]}
    >
      {/* ornament */}
      <View style={bobbaStyles.ornamentWrapper}>
        <Image
          source={require("../../assets/ornaments/circle.png")}
          style={bobbaStyles.ornament}
        />
      </View>
      {/* text */}
      <View style={bobbaStyles.textWrapper}>
        <Text style={bobbaStyles.price}>Start from {bobba.price}</Text>
        <Text style={bobbaStyles.title}>{bobba.title}</Text>
      </View>
      {/* image */}
      <View style={bobbaStyles.imageWrapper}>
        <Image
          source={require("../../" + bobba.image)}
          style={bobbaStyles.image}
        />
      </View>
    </View>
  );
}

const bobbaStyles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
    position: "relative",
    padding: 20,
    borderRadius: 20,
    minHeight: 150,
  },
  textWrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  price: {
    color: TColor.lightGrey,
    fontSize: 12,
  },
  title: {
    color: TColor.ghostWhite,
    fontSize: 20,
    fontWeight: "bold",
  },
  // ornamebt
  ornamentWrapper: {
    position: "absolute",
    top: -20,
    left: 0,
  },
  ornament: {
    resizeMode: "center",
    height: 100,
    width: 100,
  },
  // image
  imageWrapper: {
    position: "absolute",
    right: 0,
    top: -25,
  },
  image: {
    resizeMode: "center",
    height: 180,
    width: 150,
  },
});

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
  },
  contentWrapper: {
    backgroundColor: TColor.ghostWhite,
    padding: 30,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingBottom: 50,
  },
  headWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headText: {
    color: TColor.black,
    fontSize: 16,
    fontWeight: "bold",
  },
  headAnchor: {
    color: TColor.darkGrey,
    fontSize: 12,
  },
});
