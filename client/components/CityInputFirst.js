import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CityInputFirst = ({
  firstInputText,
  setFirstInputText,
  setFirstData,
  firstOnSelectCity,
  setFirstOnSelectCity,
}) => {
  const { API } = process.env;
  const [query, setQuery] = useState("");

  useEffect(() => {
    let isMounted = true;

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
          setFirstInputText(data);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });

    return () => {
      isMounted = false;
    };
  }, [query]);

  const handleInputChange = (text) => {
    setQuery(text);
  };

  const handleItemPress = (item) => {
    const selectedKey = item.Key;
    setQuery(selectedKey);
    setFirstOnSelectCity(item.LocalizedName); // Pass the selected city name to the parent component
    setFirstData(selectedKey); // Reset the first data
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
      <View
        style={[
          styles.listContainer,
          { height: firstInputText ? firstInputText.length * 60 : 0 },
        ]}
      >
        <FlatList
          data={firstInputText}
          keyExtractor={(item) => item.Key}
          renderItem={renderCityItem}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "pink",
    flex: 0.2,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 120,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
  },
  listContent: {
    flexGrow: 0,
  },
});

export default CityInputFirst;
