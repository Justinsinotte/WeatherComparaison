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
    <View style={styles.container1}>
      {firstWeatherFetch && (
        <View>
          <Text style={styles.title}>{firstOnSelectCity}</Text>
          {/* <Image
          source={{ uri: firstWeatherFetch }}
          style={styles.icon}
          alt={"firstWeatherFetch"}
        /> */}
          <Text style={styles.description}>
            {firstWeatherFetch.WeatherText}
          </Text>
          <View style={styles.InfoContainer}></View>
          <Text style={styles.description}>{`Current Temperature: ${Math.ceil(
            firstWeatherFetch[0].Temperature.Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Max Temperature: ${Math.ceil(
            firstWeatherFetch[0].TemperatureSummary.Past24HourRange.Maximum
              .Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Min Temperature: ${Math.ceil(
            firstWeatherFetch[0].TemperatureSummary.Past24HourRange.Minimum
              .Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Real Feel: ${Math.ceil(
            firstWeatherFetch[0].RealFeelTemperature.Metric.Value
          )}°C ${
            firstWeatherFetch[0].RealFeelTemperature.Metric.Phrase
          }`}</Text>
          <Text style={styles.description}>{`Humidity: ${Math.ceil(
            firstWeatherFetch[0].RelativeHumidity
          )}%`}</Text>
        </View>
      )}
      <View style={styles.container2}>
        {secondWeatherFetch && (
          <View>
            <Text style={styles.title}>{secondOnSelectCity}</Text>
            {/* <Image
            source={{ uri: secondWeatherFetch }}
            style={styles.icon}
            alt={"secondWeatherFetch"}
          /> */}
            <Text style={styles.description}>
              {secondWeatherFetch.WeatherText}
            </Text>
            <View style={styles.InfoContainer}></View>
            <Text style={styles.description}>{`Current Temperature: ${Math.ceil(
              secondWeatherFetch[0].Temperature.Metric.Value
            )}°C`}</Text>
            <Text style={styles.description}>{`Max Temperature: ${Math.ceil(
              secondWeatherFetch[0].TemperatureSummary.Past24HourRange.Maximum
                .Metric.Value
            )}°C`}</Text>
            <Text style={styles.description}>{`Min Temperature: ${Math.ceil(
              secondWeatherFetch[0].TemperatureSummary.Past24HourRange.Minimum
                .Metric.Value
            )}°C`}</Text>
            <Text style={styles.description}>{`Real Feel: ${Math.ceil(
              secondWeatherFetch[0].RealFeelTemperature.Metric.Value
            )}°C ${
              secondWeatherFetch[0].RealFeelTemperature.Metric.Phrase
            }`}</Text>
            <Text style={styles.description}>{`Humidity: ${Math.ceil(
              secondWeatherFetch[0].RelativeHumidity
            )}%`}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    // styles
    borderWidth: 1,
    borderColor: "brown",
  },
  container2: {
    borderWidth: 1,
    borderColor: "pink",
  },
  title: {
    // styles
  },
  icon: {
    // styles
  },
  description: {
    // styles
  },
  InfoContainer: {
    // styles
  },
});

export default Comparison;
