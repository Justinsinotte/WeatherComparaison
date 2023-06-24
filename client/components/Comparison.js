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
      // console.log(firstWeatherFetch[0]);
    } else {
      console.log("firstWeatherFetch not found");
    }
  }, [firstWeatherFetch, secondWeatherFetch]);

  return (
    <View style={styles.container1}>
      {secondWeatherFetch &&
        firstWeatherFetch &&
        (secondWeatherFetch[0].Temperature.Metric.Value >
        firstWeatherFetch[0].Temperature.Metric.Value ? (
          <View>
            <Text>
              {`${secondOnSelectCity} is hotter than by ${
                Math.ceil(secondWeatherFetch[0].Temperature.Metric.Value) -
                Math.ceil(firstWeatherFetch[0].Temperature.Metric.Value)
              }°Cthan ${firstOnSelectCity}`}
            </Text>
          </View>
        ) : (
          <View>
            <Text>
              {`${firstOnSelectCity} is hotter by ${
                Math.ceil(firstWeatherFetch[0].Temperature.Metric.Value) -
                Math.ceil(secondWeatherFetch[0].Temperature.Metric.Value)
              }°C than ${secondOnSelectCity}`}
            </Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    borderWidth: 1,
    borderColor: "brown",
  },
  container2: {
    borderWidth: 1,
    borderColor: "pink",
  },
  title: {
    // Add your styles
  },
  icon: {
    // Add your styles
  },
  description: {
    // Add your styles
  },
  InfoContainer: {
    // Add your styles
  },
});

export default Comparison;
