import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styled from "styled-components/native";
import Autocomplete from "react-native-autocomplete-input";

const CityInput = ({ inputText, setInputText, onSelectCity }) => {
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState("");
  const { API } = process.env;
  //   console.log(API);
  const handleInputChange = (text) => {
    setQuery(text);
    fetchCities(text);
  };

  const fetchCities = async (text) => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${API}`
    );
    const data = await response.json();
    setCities(data);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setInputText(item.local_names.en)}>
        <Text>{item.local_names.en}</Text>
      </TouchableOpacity>
    );
  };
  if (cities.length > 0) {
    const cityName = cities[0].local_names
      ? cities[0].local_names.en
      : cities[0].name;
    console.log(cityName);
  }
  return (
    <Autocomplete
      data={cities}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      defaultValue={inputText}
      onChangeText={handleInputChange}
      placeholder="Enter city name"
    />
  );
};

export default CityInput;
