import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

const Comparison = ({ firstData, secondData }) => {
  console.log("Comparison Mounted");

  if (firstData) {
    return console.log(firstData);
  }

  if (!firstData) {
    return console.log(`firstData not found`);
  }

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default Comparison;
