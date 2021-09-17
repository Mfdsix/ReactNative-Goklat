import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import * as TMetric from "../../theme/metrics";
import * as TFont from "../../theme/fonts";
import * as TColor from "../../theme/colors";

export default function Header() {
  return (
    <View style={styles.wrapper}>
      {/* head text */}
      <View style={styles.headWrapper}>
        <Text style={styles.head}>
          Good
          <br />
          Morning!
        </Text>
        <Text style={styles.desc}>
          Enjoy free shipping, enjoy our sweety bobba
        </Text>
      </View>
      {/* head icons */}
      <View style={styles.iconWrapper}>
        <Icon name="cart-outline" type="ionicon" />
        <Text style={styles.badge}>2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    padding: TMetric.padding.p30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headWrapper: {},
  head: {
    fontSize: 30,
    fontWeight: "bold",
    color: TColor.black,
  },
  desc: {
    marginTop: TMetric.margin.m12,
    fontSize: 12,
    color: TColor.black,
  },
  //   icon section
  iconWrapper: {
    position: "relative",
  },
  badge: {
    top: -10,
    right: -10,
    fontSize: 10,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    width: 20,
    height: 20,
    color: "#fff",
    backgroundColor: TColor.darkPurple,
    borderRadius: 10,
  },
});
