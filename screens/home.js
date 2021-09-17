import React from "react";
import { View } from "react-native";
import CHeader from "../components/home/header";
import CContent from "../components/home/content";

export default function Home() {
  return (
    <View>
      <CHeader />
      <CContent />
    </View>
  );
}
