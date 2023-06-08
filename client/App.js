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
      <View style={styles.innerContainerFirst}>
        <CityInputFirst
          style={styles.cityInput} // Use the style prop instead of styles
          firstInputText={firstInputText}
          setFirstInputText={setFirstInputText}
          setFirstData={setFirstData}
          onSelectCity={handleCitySelect}
          setFirstOnSelectCity={setFirstOnSelectCity}
        />
        <FirstTempCard
          style={styles.firstTempCard} // Use the style prop instead of styles
          firstData={firstData}
          firstOnSelectCity={firstOnSelectCity}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 5, // Add border to the container
    borderColor: "pink", // Set border color to pink
  },
  innerContainerFirst: {
    flex: 1,
    width: "50%",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 3,
    borderColor: "red",
  },
  cityInput: {
    borderWidth: 3,
    borderColor: "blue",
  },
  firstTempCard: {
    borderWidth: 3,
    borderColor: "brown",
  },
});
