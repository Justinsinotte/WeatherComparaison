import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import FirstTempCard from "./components/FirstTempCard.js";
import CityInput from "./components/CityInput.js";
import { useState, useEffect } from "react";

export default function App() {
  const [firstData, setFirstData] = useState();
  const [inputText, setInputText] = useState();
  const [city, setCity] = useState("");

  const handleCitySelect = (cityName) => {
    setCity(cityName);
  };
  return (
    <View style={styles.container}>
      <CityInput
        inputText={inputText}
        setInputText={setInputText}
        onSelectCity={handleCitySelect}
      />
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
