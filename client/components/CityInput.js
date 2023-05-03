import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import Autocomplete from "react-native-autocomplete-input";

const CityInput = ({ inputText, setInputText, onSelectCity }) => {
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState("");
  const { API } = process.env;

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=2&appid=${API}`
      );
      const data = await response.json();
      const citiesArray = Object.values(data);
      setCities(citiesArray);
    };

    if (query) {
      fetchCities();
    } else {
      setCities([]);
    }
  }, [query]);

  const handleInputChange = (text) => {
    setQuery(text);
  };

  const handleSelectCity = (item) => {
    onSelectCity(item);
    setInputText(item.local_names?.en || item.name);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleSelectCity(item)}>
        <Text>{item.local_names?.en || item.name}</Text>
      </TouchableOpacity>
    );
  };
  // console.log(cities);
  return (
    <Autocomplete
      data={cities}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      defaultValue={inputText}
      onChangeText={handleInputChange}
      placeholder="Enter city name"
      flatListProps={{ renderItem }}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      listStyle={styles.list}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 0,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  list: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginHorizontal: 10,
    maxHeight: 200,
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default CityInput;
