import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FirstTempCard from "./components/FirstTempCard";
import SecondTempCard from "./components/SecondTempCard";
import CityInputFirst from "./components/CityInputFirst";

export default function App() {
  const [firstData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);
  const [firstInputText, setFirstInputText] = useState("");
  const [inputSecondText, setSecondInputText] = useState("");
  const [firstOnSelectCity, setFirstOnSelectCity] = useState("");
  const [city, setCity] = useState("");

  console.log(`App.js firstOneSelectCity is: ${firstOnSelectCity}`);
  const handleCitySelect = (cityName) => {
    setCity(cityName);
  };

  return (
    <View style={styles.container}>
      <CityInputFirst
        firstInputText={firstInputText}
        setFirstInputText={setFirstInputText}
        setFirstData={setFirstData}
        onSelectCity={handleCitySelect}
        setFirstOnSelectCity={setFirstOnSelectCity}
      />
      <FirstTempCard
        firstData={firstData}
        firstOnSelectCity={firstOnSelectCity}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50, // Adjust the top padding as needed
    borderColor: "brown",
    borderWidth: 1,
  },
  cityInput: {
    marginBottom: 10, // Adjust the margin as needed
    borderColor: "blue",
    borderWidth: 1,
  },
  firstTempCard: {
    marginTop: 10, // Adjust the margin as needed
    borderColor: "pink",
    borderWidth: 1,
  },
});
