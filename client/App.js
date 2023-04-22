import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import TestApi from "./components/testApi";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>KIKIKIK</Text>
      <Button title={"Does Nothing"} />
      <TestApi />
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
