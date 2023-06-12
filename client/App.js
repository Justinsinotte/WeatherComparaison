import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FirstTempCard from "./components/FirstTempCard";
import SecondTempCard from "./components/SecondTempCard";
import CityInputFirst from "./components/CityInputFirst";
import CityInputSecond from "./components/CityInputSecond";

export default function App() {
  const [firstData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);
  const [firstInputText, setFirstInputText] = useState("");
  const [secondInputText, setSecondInputText] = useState("");
  const [firstOnSelectCity, setFirstOnSelectCity] = useState("");
  const [secondOnSelectCity, setSecondOnSelectCity] = useState("");
  const [cityFirst, setCityFirst] = useState("");
  const [citySecond, setCitySecond] = useState("");

  console.log(`App.js firstOneSelectCity is: ${firstOnSelectCity}`);
  const handleCitySelectFirst = (cityName) => {
    setCityFirst(cityName);
  };

  const handleCitySelectSecond = (cityName) => {
    setCitySecond(cityName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainerFirst}>
        <CityInputFirst
          style={styles.cityInput} // Use the style prop instead of styles
          firstInputText={firstInputText}
          setFirstInputText={setFirstInputText}
          setFirstData={setFirstData}
          onSelectCity={handleCitySelectFirst}
          setFirstOnSelectCity={setFirstOnSelectCity}
        />
        <FirstTempCard
          style={styles.firstTempCard} // Use the style prop instead of styles
          firstData={firstData}
          firstOnSelectCity={firstOnSelectCity}
        />
      </View>
      <View style={styles.innerContainerSecond}>
        <CityInputSecond
          style={styles.cityInput} // Use the style prop instead of styles
          secondInputText={secondInputText}
          setSecondInputText={setSecondInputText}
          setSecondData={setSecondData}
          onSelectCity={handleCitySelectSecond}
          setSecondOnSelectCity={setSecondOnSelectCity}
        />
        <SecondTempCard
          style={styles.secondTempCard} // Use the style prop instead of styles
          secondData={secondData}
          secondOnSelectCity={secondOnSelectCity}
        />
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    display: "flex",
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
  innerContainerSecond: {
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
  secondTempCard: {
    borderWidth: 3,
    borderColor: "brown",
  },
});
