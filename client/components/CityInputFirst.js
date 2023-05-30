import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

const CityInputFirst = ({
  firstInputText,
  setFirstInputText,
  firstData,
  setFirstData,
}) => {
  const { API } = process.env;
  const [query, setQuery] = useState("");
  console.log(`Query is : ${query}`);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    {
      fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API}&q=${query}&offset=5`
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          if (isMounted) {
            setFirstInputText(data); // Pass the fetched data to the callback function
          }
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    }

    return () => {
      isMounted = false; // Cleanup function to update the mounted flag
    };
  }, [query]); // Only trigger the effect when the query changes
  const handleInputChange = (text) => {
    setQuery(text);
  };

  const handleItemPress = (item) => {
    const selectedKey = item.Key;
    setQuery(selectedKey);
    setFirstData(selectedKey);
  };

  const renderCityItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View>
        <Text>{item.LocalizedName}</Text>
        <Text>{item.AdministrativeArea.ID}</Text>
      </View>
    </TouchableOpacity>
  );
  // console.log(`This is first city ${firstInputText[0].Key}`);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder="Enter City Name"
        value={query}
        onChangeText={handleInputChange}
      />
      <FlatList
        data={firstInputText}
        keyExtractor={(item) => item.Key}
        renderItem={renderCityItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 120,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
  },
});

export default CityInputFirst;
