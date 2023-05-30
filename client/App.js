import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import FirstTempCard from "./components/FirstTempCard.js";
import SecondTempCard from "./components/SecondTempCard.js";
import CityInputFirst from "./components/CityInputFirst.js";
import TestButton from "./components/TestButton.js";
import { useState, useEffect } from "react";

export default function App() {
  const [firstData, setFirstData] = useState();
  const [secondData, setSecondData] = useState();
  const [firstInputText, setFirstInputText] = useState("");
  const [inputSecondText, setSecondInputText] = useState();
  const [city, setCity] = useState();

  const handleCitySelect = (cityName) => {
    // console.log(`setCity is ${cityName}`);
    setCity(cityName);
    // console.log(`city is ${city}`);
  };
  console.log(`firstData is ${firstData}`);
  return (
    <View style={styles.container}>
      <CityInputFirst
        firstInputText={firstInputText}
        setFirstInputText={setFirstInputText}
        onSelectCity={handleCitySelect}
      />
      {/* <TestButton /> */}
      <FirstTempCard firstData={firstData} setFirstData={setFirstData} />
      <SecondTempCard secondData={secondData} setSecondData={setSecondData} />
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
