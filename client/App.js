import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import FirstTempCard from "./components/FirstTempCard.js";
import { useState, useEffect } from "react";

export default function App() {
  const [firstData, setFirstData] = useState();

  return (
    <View style={styles.container}>
      <FirstTempCard firstData={firstData} setFirstData={setFirstData} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
