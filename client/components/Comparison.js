import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

const Comparison = ({
  firstWeatherFetch,
  secondWeatherFetch,
  secondOnSelectCity,
  firstOnSelectCity,
}) => {
  console.log("Comparison Mounted");

  useEffect(() => {
    if (firstWeatherFetch) {
      return console.log(firstWeatherFetch[0]);
    }

    if (!firstWeatherFetch) {
      return console.log(`firstWeatherFetch not found`);
    }
  }, [firstWeatherFetch, secondWeatherFetch]);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default Comparison;
