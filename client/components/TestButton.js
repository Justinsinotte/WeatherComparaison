import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TestButton = () => {
  const [cities, setCities] = useState(null);
  const handleClick = () => {
    fetch("http://10.0.0.102:3001/api/citiesGet")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setCities(data);
      })
      .catch((error) => {
        console.log("Error fetching data:");
      });
  };
  console.log(cities);
  return (
    <View>
      <Button title="Test" onPress={handleClick} />
    </View>
  );
};

export default TestButton;
